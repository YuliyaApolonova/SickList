import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import {LoginComponent} from './start-page/login/login.component';
import {RegistrationComponent} from './start-page/registration/registration.component'

import { HomeComponent } from './home/home.component';
import { SickListComponent } from './home/sick-list/sick-list.component';
import { AddListComponent } from './home/add-list/add-list.component';

import {StartPageRoutingModule} from "./start-page/start-page-routing.module";
import {HomeRoutingModule} from './home/home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    SickListComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StartPageRoutingModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  providers: [StartPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
