import { Component, OnInit } from '@angular/core';

import {SickList} from '../list';
@Component({
  selector: 'app-sick-list',
  templateUrl: './sick-list.component.html',
  styleUrls: ['./sick-list.component.css']
})
export class SickListComponent implements OnInit {

  lists: SickList[];

  constructor() { }

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    //get data from DB
  }
}
