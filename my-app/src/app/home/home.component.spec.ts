import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { RouterLinkStubDirective }   from '../testing/router-stubs';
import { RouterOutletStubComponent } from '../testing/router-stubs';

import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import {AddListComponent} from "./add-list/add-list.component";
import {SickListComponent} from "./sick-list/sick-list.component";
import {FormsModule} from "@angular/forms";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AddListComponent,
        SickListComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  tests();

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  function tests() {
    let links: RouterLinkStubDirective[];
    let linkDes: DebugElement[];

    beforeEach(() => {
      // trigger initial data binding
      fixture.detectChanges();

      // find DebugElements with an attached RouterLinkStubDirective
      linkDes = fixture.debugElement
        .queryAll(By.directive(RouterLinkStubDirective));

      // get the attached link directive instances using the DebugElement injectors
      links = linkDes
        .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });

    it('can instantiate it', () => {
      expect(component).not.toBeNull();
    });

    it('can get RouterLinks from template', () => {
      expect(links.length).toBe(2, 'should have 2 links');
      expect(links[0].linkParams).toBe('/home/list', '1st link should go to the whole list of vacations');
      expect(links[1].linkParams).toBe('/home/addList', '1st link should go to form to add new list');
    });

    it('can click add list link in template', () => {
      const addLinkDe = linkDes[1];
      const addLink = links[1];

      expect(addLink.navigatedTo).toBeNull('link should not have navigated yet');

     addLinkDe.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(addLink.navigatedTo).toBe('/home/addList');
    });
  }

});
