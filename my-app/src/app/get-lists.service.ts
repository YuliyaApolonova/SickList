/**
 * Created by user on 21.07.17.
 */
/**тзь
 * Created by user on 10.07.17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

import {FormatList} from './home/sick-list/dbFormatList';

@Injectable()
export class GetListsService {

  private listUrl = 'http://localhost:1337';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getLists(): Observable<FormatList[]> {
    return this.http.get(this.listUrl+ '/list')
      .map((response: Response) => response.json() as FormatList[])
      .catch(this.handleError);
  }

  createList(from, to, type): Observable<FormatList>{
    return this.http.post(this.listUrl+'/add', JSON.stringify({from: from, to: to, type: type}), {headers: this.headers})
      .map(response => response.json().data as FormatList)
      .catch(this.handleError);
  }

  removeList(id: number): Observable<void> {
    const url = this.listUrl+`/remove`+`/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError);
  }

  getVacationInd(): Observable<number> {
    const url = this.listUrl + '/vac_count';
    return this.http.get(url, {headers: this.headers})
      .map( response => response.json().data as number)
      .catch(this.handleError);
  }

  getSickInd(): Observable<number> {
    const url = this.listUrl + '/sick_count';
    return this.http.get(url, {headers: this.headers})
      .map( response => response.json().data as number)
      .catch(this.handleError);
  }

  // getLog(): Observable<string> {
  //   return this.http.get(this.listUrl+'/login', {headers: new Headers({'Content-Type' : 'text/html'})})
  //     .map( resp => resp.text() as string)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
