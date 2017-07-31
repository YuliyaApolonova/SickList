/**
 * Created by user on 21.07.17.
 */
/**
 * Created by user on 10.07.17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

import {FormatList} from './home/sick-list/dbFormatList';

@Injectable()
export class GetListsService {

  private listUrl = 'sick_list';

  constructor(private http: Http) { }

  getLists(): Observable<FormatList[]> {
    return this.http.get(this.listUrl)
      .map(response => response.json().data as FormatList[])
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
