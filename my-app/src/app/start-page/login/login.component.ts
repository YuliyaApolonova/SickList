import { Component} from '@angular/core';

import {User} from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  users: User[] = [
    {'username': 'Vasya', 'password': 'Vasya'}
  ];
  model = new User('', '');
  submitted = false;

  onSubmit(): void {
    const model = this.model;
    this.submitted = true;
    this.users.forEach(function(item, i, arr){
      if(model.username === item.username && model.password === item.password){
        console.log('Autirised as ' + item.username);
      }
    })

  }

}
