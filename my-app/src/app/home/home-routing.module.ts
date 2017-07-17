/**
 * Created by user on 17.07.17.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SickListComponent} from './sick-list/sick-list.component';
import {AddListComponent} from './add-list/add-list.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'home/addList', pathMatch: 'full' },
  { path: 'home/list',  component: SickListComponent },
  { path: 'home/addList', component: AddListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}
