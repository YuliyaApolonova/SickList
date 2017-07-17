import { Component} from '@angular/core';

import {User} from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  model = new User('', '');
  submitted = false;

  onSubmit() { this.submitted = true; }

}
