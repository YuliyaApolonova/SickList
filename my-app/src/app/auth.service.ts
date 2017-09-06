/**
 * Created by user on 18.07.17.
 */

import
{ Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  public token: string;
  constructor(private http: Http){}
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  logout(): void {
    localStorage.removeItem('mean-token');
    console.log('logout');
    // this.isLoggedIn = false;
  }

  register(data): Observable<boolean>{
    return this.http.post('http://localhost:1337/register', JSON.stringify(data))
      .map((response:Response) => {
     let token = response.json().token;
     let message = response.json().message;
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

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
