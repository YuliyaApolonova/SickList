import { Component, OnInit } from '@angular/core';

import {FormatList} from './dbFormatList';

import {CurrentDataService} from '../../current-data.service';
import {GetListsService} from '../../get-lists.service';

@Component({
  selector: 'app-sick-list',
  templateUrl: './sick-list.component.html',
  styleUrls: ['./sick-list.component.css'],
  providers: [GetListsService]
})
export class SickListComponent implements OnInit {

  lists: FormatList[];

  constructor(private currentDataService: CurrentDataService, private getListsService: GetListsService) { }

  ngOnInit(): void {
    this.getLists();
    console.log(this.lists); //why this.lists = undefined?
  }

  checkDeletePerm(date): boolean { // for delete button on sick-list

    const date_arr = date.split('-');
    const year = date_arr[0];
    const month = date_arr[1];
    const day = date_arr[2];

    if (parseInt(year, 10) > +this.currentDataService.getCurrentDate().year) { // date  - это строка!!! Put in DB as a string
      return true;
    }
    if (parseInt(month, 10) > +this.currentDataService.getCurrentDate().month) {
      return true;
    }
    if (parseInt(day, 10) > +this.currentDataService.getCurrentDate().day) {
      return true;
    }
    return false;
  }

  getLists(): void {
    this.getListsService.getLists().subscribe(lists => {
      console.log('hello'+lists);
      this.lists = lists});
  }

  deleteVacation(list: FormatList): boolean {
    const res = confirm('Are you sure to delete this vacation?');
    if (!res) {
      return false;
    }
    this.getListsService.removeList(list.id)
      .subscribe(() => this.lists = this.lists.filter(l => l!== list));
    return true;
  }
}
