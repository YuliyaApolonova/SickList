import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StartPageComponent} from "./start-page.component";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import {StartPageRoutingModule} from './start-page-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AuthService} from './login/auth.service';

@NgModule({
  imports: [
    CommonModule,
    StartPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    StartPageComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    AuthService
  ]
})
export class StartPageModule { }
