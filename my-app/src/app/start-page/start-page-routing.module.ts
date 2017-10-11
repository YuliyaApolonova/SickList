/**
 * Created by user on 17.07.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {StartPageComponent} from './start-page.component';
// import {StartActivateGuard} from './start-activate-guard';

const startRoutes: Routes = [
  {
    path: 'start',
    component: StartPageComponent,
    // canActivate: [StartActivateGuard],
    children: [
      {
        path: '',
        component: LoginComponent},
          {
            path: 'registration',
            component: RegistrationComponent
          },
          {
            path: 'sign_in',
            component: LoginComponent
          }
        ]
      }
    ];

@NgModule({
  imports: [ RouterModule.forChild(startRoutes) ],
  exports: [ RouterModule ]
})
export class StartPageRoutingModule {}
