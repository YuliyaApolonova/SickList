import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import {LoginComponent} from './start-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StartPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
