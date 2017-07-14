import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StartPageComponent} from "./start-page.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StartPageComponent,
    LoginComponent
  ]
})
export class StartPageModule { }
