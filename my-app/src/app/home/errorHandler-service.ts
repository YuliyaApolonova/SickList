/**
 * Created by user on 04.10.17.
 */
/**
 * Created by user on 21.07.17.
 */
/**тзь
 * Created by user on 10.07.17.
 */
import { Injectable } from '@angular/core';

import {Router} from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorHandlerService {

  constructor(private router: Router) { }
  handleErr(err) :void {
    console.log('response from handle error service');
      if(err === "Invalid token" ){
        localStorage.removeItem('mean-token');
        alert('Your session was expired');
        this.router.navigate(['/start']); //потерялся контекст
      }
  }
}
