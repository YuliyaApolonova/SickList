/**
 * Created by user on 27.07.17.
 */
import { async, inject, TestBed } from '@angular/core/testing';

import { MockBackend, MockConnection} from '@angular/http/testing';

import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { FormatList } from './home/sick-list/dbFormatList';
import { GetListsService } from './get-lists.service';

const makeLists = () => [
  { dateFrom: '2017-12-04', dateTo: 'Windstorm', type: 'vacation' },
  { dateFrom: '2017-12-04', dateTo: 'Windstorm', type: 'vacation' },
  { dateFrom: '2017-12-04', dateTo: 'Windstorm', type: 'vacation'  },
  { dateFrom: '2017-12-04', dateTo: 'Windstorm', type: 'vacation' }
] as FormatList[];

////////  Tests  /////////////
describe('GetListsService (mockBackend)', () => {

  let service: GetListsService;
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        GetListsService,
        { provide: XHRBackend, useClass: MockBackend }

      ]
    })
      .compileComponents();

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        console.log(store[key]);
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        // store = {};
        delete store['mean-token'];
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

    localStorage.setItem('mean-token', JSON.stringify({"token": '12345'}));
    console.log(localStorage.getItem('mean-token'));

    service = TestBed.get(GetListsService);

  }));


  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('can instantiate service when inject service',
    inject([GetListsService], (service: GetListsService) => {
      expect(service instanceof GetListsService).toBe(true);
    }));



  it('can instantiate service with "new"', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http should be provided');
    let service = new GetListsService(http);
    expect(service instanceof GetListsService).toBe(true, 'new service should be ok');
  }));


  it('can provide the mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
    }));

  describe('when call getLists', () => {
    let backend: MockBackend;
    let service: GetListsService;
    let fakeLists: FormatList[];
    let response: Response;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      service = new GetListsService(http);
      fakeLists = makeLists();
      let options = new ResponseOptions({status: 200, body: {data: fakeLists}});
      response = new Response(options);
    }));

    it('should have expected fake lists (Observable.map)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.getLists()
        .map(lists => {
          expect(lists.length).toBe(fakeLists.length,
            'should have expected no. of lists');
          expect(lists[0]).toEqual(fakeLists[0]);
          expect(lists[1]).toEqual(fakeLists[1]);
          expect(lists[2]).toEqual(fakeLists[2]);
          expect(lists[3]).toEqual(fakeLists[3]);
        });
    })));

    it('should have expected fake lists (Observable.do)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.getLists()
        .do(lists => {
          expect(lists.length).toBe(fakeLists.length,
            'should have expected no. of lists');
        })
    })));


    it('should be OK returning no lists', async(inject([], () => {
      let resp = new Response(new ResponseOptions({status: 200, body: {data: []}}));
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

      service.getLists()
        .do(lists => {
          expect(lists.length).toBe(0, 'should have no lists');
        })
    })));

    it('should treat 404 as an Observable error', async(inject([], () => {
      let resp = new Response(new ResponseOptions({status: 404}));
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

      service.getLists()
        .do(lists => {
          fail('should not respond with lists');
        })
        .catch(err => {
          expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
          return Observable.of(null); // failure is the expected test result
        })
    })));
  });
});


