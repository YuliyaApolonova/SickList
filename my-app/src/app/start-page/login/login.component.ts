import { Component} from '@angular/core';

import {User} from './user';
import {GetListsService} from '../../get-lists.service';
import {AuthService} from './auth.service';

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
 constructor(private authService: AuthService) { }
  model = new User('', '');
  submitted = false;
  // response = '';

  onSubmit(): void {
    this.submitted = true;
    const username = this.model.username;
    const password = this.model.password;

    this.authService.login(username, password);
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
