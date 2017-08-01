import { Component} from '@angular/core';

import {User} from './user';
import {GetListsService} from '../../get-lists.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
        /****stub***/
  // users: User[] = [
  //   {'username': 'Vasya', 'password': 'Vasya'}
  // ];
 constructor(private getListsService: GetListsService) { }
  model = new User('', '');
  submitted = false;
  // response = '';

  onSubmit(): void {
    this.submitted = true;
    // this.getListsService.getLog().subscribe(response => this.response = response);

          /****stub***/
    // const model = this.model;
    // this.users.forEach(function(item, i, arr){
    //   if(model.username === item.username && model.password === item.password){
    //     console.log('Autirised as ' + item.username);
    //   }
    // })

  }

}
