/**
 * Created by user on 17.07.17.
 */

import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {SickListComponent} from './sick-list/sick-list.component';
import {AddListComponent} from './add-list/add-list.component';
import {HomeComponent} from './home.component';
import { AuthGuard } from '../auth-guard.service';
const homeRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
          {
            path: 'list',
            component: SickListComponent
            // loadChildren: 'sick-list/sick-list.component#SickListComponent'
          },
          {
            path: 'addList',
            component: AddListComponent
          }
        ]
      }
    ];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}
