/**
 * Created by user on 02.08.17.
 */
/**
 * Created by user on 18.07.17.
 */

import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  constructor(private http: Http){}

  private headers = new Headers({'Content-Type': 'application/json'});

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:1337/login', JSON.stringify({username: username, password: password}), {headers: this.headers})
      .map((response: Response) => response.json() as boolean)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
