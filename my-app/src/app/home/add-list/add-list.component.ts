import {Component, OnInit} from '@angular/core';

import {SickList} from '../list';

import {CurrentDataService} from '../../current-data.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  minDate = { year: 2017, month: 6, day:1};


  constructor(private currentDataService: CurrentDataService) {  }

  model = new SickList(null, null,'' );

  types = ['vacation', 'sick-list'];

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit (){
   this.setMinDate();
  }

 setMinDate() {

   this.minDate.day = this.currentDataService.getCurrentDate().day;
   this.minDate.month = this.currentDataService.getCurrentDate().month;
   this.minDate.year = this.currentDataService.getCurrentDate().year;

  }

}
