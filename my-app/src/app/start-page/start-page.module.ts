import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StartPageComponent} from "./start-page.component";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import {StartPageRoutingModule} from './start-page-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    StartPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    StartPageComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class StartPageModule { }
