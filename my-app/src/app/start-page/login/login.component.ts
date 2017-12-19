import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {User} from './user';
import {AuthService} from '../../auth.service';
import {IResponse} from '../../response';

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

 constructor(private authService: AuthService, private router: Router) { }

  model = new User('', '');
  submitted = false;
  response = '';

  showHelpPanelInput = false;
  usrEmail: string;

  onSubmit(): void {
    this.submitted = true;
    const username = this.model.username;
    const password = this.model.password;
    this.authService.login(username, password)
      .subscribe(data => {
        if(data) {
          this.router.navigate(['/home']);
          console.log('is logged in: ' + this.authService.isLoggedIn());
          let currentUsr = this.authService.currentUser();
          console.log('current user' + currentUsr.username);
          console.log('user id: ' + currentUsr.id);
          console.log('user email: ' + currentUsr.email);
        }
        else{
          console.log('Authorisation error');
        }
      });
      // .subscribe(data => {
      //   // this.response = 'data';
      //   // console.log('Hello' + data); //not working
      //   if(data){
      //     this.response = 'You are welcome';
      //     this.router.navigate(['/home']);
      //
      //   }
      //   else{
      //     this.response = 'Invalid login or password';
      //   }
      // });
    // this.getListsService.getLog().subscribe(response => this.response = response);

          /****stub***/
    // const model = this.model;
    // this.users.forEach(function(item, i, arr){
    //   if(model.username === item.username && model.password === item.password){
    //     console.log('Autirised as ' + item.username);
    //   }
    // })

  }

  showHelpPanel(): void {
    this.showHelpPanelInput = true;
  }

  forgotPassword(): void {
    this.authService.forgotPassword(this.usrEmail)
      .subscribe((response: IResponse) =>
        {
        console.log(response.message);
        }
      );
  }

}
