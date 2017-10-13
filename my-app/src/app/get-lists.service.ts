/**
 * Created by user on 21.07.17.
 */
/**тзь
 * Created by user on 10.07.17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

import {FormatList} from './home/sick-list/dbFormatList';
import {IResponse} from './response';

@Injectable()
export class GetListsService {

  private listUrl = 'http://localhost:1337';
  private headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('mean-token')).token});
  // private params = new URLSearchParams();

  constructor(private http: Http, private router: Router) { }

  getLists(): Observable<FormatList[]> {
    return this.http.get(this.listUrl + '/list', {headers: this.headers})
      .map((response: Response) => response.json().data as FormatList[])
      .catch(this.handleError);
  }

  createList(from, to, type): Observable<FormatList>{
    return this.http.post(this.listUrl + '/add', JSON.stringify({dateFrom: from, dateTo: to, type: type}), {headers: this.headers})
      .map((response: Response) => response.json().data as FormatList)
      .catch(this.handleError);
  }

  removeList(index): Observable<void> {
    // const url = this.listUrl+`/remove`+`/${index}`;
    const url = this.listUrl + '/remove';
    let myParams = new URLSearchParams();
    myParams.set('index', index);
    console.log(myParams);
    return this.http.delete(url, {headers: this.headers, params: myParams})
      .map(() => null)
      .catch(this.handleError);
  }

  updateList(list, index): Observable<void> {
    const url = this.listUrl + '/update';
    let myParams = new URLSearchParams();
    myParams.set('index', index);
    console.log(myParams);
    return this.http.put(url, JSON.stringify(list), {headers: this.headers, params: myParams})
      .map(() => null)
      .catch(this.handleError);
  }

  getVacationInd(): Observable<IResponse> {
    const url = this.listUrl+'/vac_count';
    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => response.json() as IResponse)
      .catch(this.handleError);
  }

  getSickInd(): Observable<IResponse> {
    const url = this.listUrl+'/sick_count';
    return this.http.get(url, {headers: this.headers})
      .map( (response: Response) =>response.json() as IResponse)
      .catch(this.handleError);
  }

  // createList(from, to, type): Observable<void>{
  //   return this.http.post(this.listUrl+`/add`, JSON.stringify({from: from, to: to, type: type}), {headers: this.headers})
  //     .map((response: Response) => {
  //     console.log(response.json().message);
  //     })
  //     .catch(this.handleError);
  // }

  // removeList(): Observable<void> {
  //   // const url = this.listUrl+`/remove`+`/${id}`;
  //   const url = this.listUrl+'/remove';
  //   return this.http.delete(url, {headers: this.headers})
  //     .map(() => null)
  //     .catch(this.handleError);
  // }

  // getLog(): Observable<string> {
  //   return this.http.get(this.listUrl+'/login', {headers: new Headers({'Content-Type' : 'text/html'})})
  //     .map( resp => resp.text() as string)
  //     .catch(this.handleError);
  // }

  // getVacationInd(): Observable<number> {
  //   const url = this.listUrl+'/vac_count';
  //   return this.http.get(url, {headers: this.headers})
  //     .map((response: Response) => response.json() as number)
  //     .catch(this.handleError);
  // }

   private handleError(error: Response | any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

  // private handleError: (error: Response | any) => Observable<any> =
  //  function(error: Response | any) : Observable <any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   let errMessage = JSON.parse(error._body).message;
  //   if(errMessage === "Invalid token" ){
  //     localStorage.removeItem('mean-token');
  //     alert('Your session was expired');
  //     this.router.navigate(['/start']); //потерялся контекст
  //   }
  //   return Observable.throw(error.message || error);
  // }
}
