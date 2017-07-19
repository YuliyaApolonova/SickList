import { Component, OnInit } from '@angular/core';

import {SickList} from '../list';

import {CurrentDataService} from '../../current-data.service';

@Component({
  selector: 'app-sick-list',
  templateUrl: './sick-list.component.html',
  styleUrls: ['./sick-list.component.css']
})
export class SickListComponent implements OnInit {

  lists = [];

  constructor(private currentDataService: CurrentDataService) { }

  ngOnInit() {
    this.getLists();
  }
  checkDeletePerm(date){ //for delete button on sick-list

    let date_arr = date.split('-');
    let year = date_arr[0];
    let month = date_arr[1];
    let day = date_arr[2];

    if(parseInt(year) > +this.currentDataService.getCurrentDate().year){ //date  - это строка!!! Put in DB as a string
      return true;
    }
    if(parseInt(month) > +this.currentDataService.getCurrentDate().month){
      return true;
    }
    if(parseInt(day) > +this.currentDataService.getCurrentDate().day){
      return true;
    }
    return false;

  }
  getLists() {
    //get data from DB
    this.lists = [
      {dateFrom: '2017-06-03', dateTo: '2017-08-03', type: 'vacation'},
      {dateFrom: '2018-08-03', dateTo: '2018-08-06', type: 'vacation'}
    ]
  }
  deleteVacation(){
    let res = confirm('Are you sure to delete this vacation?')
    if(!res){
      return false;
    }
  }
}
