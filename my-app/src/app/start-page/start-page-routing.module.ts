/**
 * Created by user on 17.07.17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/start/sign_in', pathMatch: 'full' },
  { path: 'start/sign_in',  component: LoginComponent },
  { path: 'start/registration', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class StartPageRoutingModule {}
