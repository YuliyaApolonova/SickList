import { Component, OnInit } from '@angular/core';

import {SickList} from '../list';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {

  constructor() { }

  model = new SickList('', '','' );

  types = ['vacation', 'sick-list'];

  submitted = false;

  onSubmit() { this.submitted = true; }
}
