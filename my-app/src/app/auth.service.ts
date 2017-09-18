/**
 * Created by user on 18.07.17.
 */

import
{ Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {ICurrentUser} from './currentUser';

@Injectable()
export class AuthService {

  public token: string;

  constructor(private http: Http){
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.token = currentUser && currentUser.token;
    this.token = JSON.parse(localStorage.getItem('mean-token')) && JSON.parse(localStorage.getItem('mean-token')).token;
  }

  // public  isLoggedIn = false;

  isLoggedIn(): boolean{
    let token = this.token;
    let payload;
    if(token){
      payload  = token.split('.')[1];
      payload = atob(payload);
      payload = JSON.parse(payload);
      return payload.exp > Date.now() / 1000;
    }
    else{
      return false;
    }
  }

  currentUser(): ICurrentUser {
    if(this.isLoggedIn()){
      let token = this.token;
      let payload;
      if(token) {
        payload = token.split('.')[1];
        payload = atob(payload);
        payload = JSON.parse(payload);
        return {
          email: payload.email,
          id: payload._id,
          username: payload.username
        }
      }

    }
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  logout(): void {
    console.log('logout');
    localStorage.removeItem('mean-token');
    // this.isLoggedIn = false;
  }

  register(data): Observable<boolean>{
    return this.http.post('http://localhost:1337/register', JSON.stringify(data))
      .map((response:Response) => {
     let token = response.json().token;
     // let message = response.json().message;
        console.log('token: ' + token);
        if(token){
          this.token = token;
          localStorage.setItem('mean-token', JSON.stringify({ token: token}));
          // localStorage.setItem('mean-token', JSON.stringify({username: data.username, token: token}));
          // console.log('current user in localstorage' + localStorage.getItem('mean-token'));
          return true;
        }
        else{
          return false;
        }
      } )
      .catch(this.handleError);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:1337/login', JSON.stringify({username: username, password: password}), {headers: this.headers})
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        console.log('token' + token);
        if(token){
          this.token = token;
          // localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          localStorage.setItem('mean-token', JSON.stringify({ token: token}));
          console.log('current user in localstorage' + localStorage.getItem('mean-token'));

          return true;
        }
        else{
          return false;
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
