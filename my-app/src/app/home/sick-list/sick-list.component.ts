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
  activeList: FormatList;
  errorMessage = '';
  editModel = new FormatList('', '', '');
  types = ['vacation', 'sick-leave'];

  constructor(private currentDataService: CurrentDataService, private getListsService: GetListsService) { }

  ngOnInit(): void {
    this.getLists();
    console.log(this.lists);
  }

  checkDeletePerm(date): boolean { // for delete button on sick-list

    const date_arr = date.split('-');
    const year = date_arr[0];
    const month = date_arr[1];
    const day = date_arr[2];

    let currentDate = this.currentDataService.getCurrentDate();
    if (parseInt(year, 10) > +currentDate.year) { // date  - это строка!!! Put in DB as a string
      return true;
    }
    if (parseInt(month, 10) > +currentDate.month) {
      return true;
    }
    if (parseInt(day, 10) > +currentDate.day) {
      return true;
    }
    return false;
  }

  getLists(): void {
    this.getListsService.getLists().subscribe(lists => {
      console.log('hello'+lists);
      this.lists = lists},
      error => this.errorMessage = <any>error);
  }

  // deleteVacation(list: FormatList): boolean {
  //   const res = confirm('Are you sure to delete this one?');
  //   if (!res) {
  //     return false;
  //   }
  //   this.getListsService.removeList()
  //     .subscribe(() => this.lists = this.lists.filter(l => l!== list));
  //   return true;
  // }

  deleteVacation(list, index): boolean {
    const res = confirm('Are you sure to delete this one?');
    if (!res) {
      return false;
    }
    this.getListsService.removeList(index)
      .subscribe(() => this.lists = this.lists.filter(l => l!== list));
    return true;
  }

  editVacation(list): void {
    this.activeList = list;
    // this.getListsService.editList(index)
  }

  updateVacation(list, index): void {
    this.activeList = null;
    this.getListsService.updateList(list, index)
      .subscribe();
  }

}
