/**
 * Created by user on 17.07.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from "./home.component";
import { AddListComponent } from './add-list/add-list.component';
import { SickListComponent } from './sick-list/sick-list.component';

import {HomeRoutingModule} from './home-routing.module';

import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    AddListComponent,
    SickListComponent,
    AdminComponent
  ]
})
export class HomeModule { }
