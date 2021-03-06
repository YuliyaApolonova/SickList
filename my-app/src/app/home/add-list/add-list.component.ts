import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SickList} from '../list';
import {IDate} from '../../date';

import {FormatList} from '../sick-list/dbFormatList';

import {CurrentDataService} from '../../current-data.service';
import  {GetListsService} from '../../get-lists.service';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})

export class AddListComponent implements OnInit{

  minDate: IDate = { year: 2017, month: 1, day: 1 };

  // lists: FormatList[] = [
  //   {'dateFrom': '2017-03-12', 'dateTo': '2017-04-05', 'type': 'vacation'}
  // ];

  // lists: FormatList[];

  constructor(private currentDataService: CurrentDataService, private getListsService: GetListsService,
              private  router: Router) {  }

  model = new SickList(null, null, '' ); // в input приходит object

  types = ['vacation', 'sick-leave'];

  submitted = false;

  errorMessage = '';

  onSubmit(): void {
    this.submitted = true;
    let dateFrom = this.model.dateFrom.year + '-' + this.model.dateFrom.month + '-' + this.model.dateFrom.day;
    let dateTo = this.model.dateTo.year + '-' + this.model.dateTo.month + '-' + this.model.dateTo.day;
    let type = this.model.type;
    this.addList(dateFrom, dateTo, type);


    // this.lists.push({'dateFrom': dateFrom, 'dateTo': dateTo, 'type': type});
    // console.log(this.lists);
  }

  ngOnInit(): void {

    this.setMinDate();
  }

  // ngOnDestroy(): void {
  //   this.minDate = null;
  // }

 setMinDate(): void {
   this.minDate = this.currentDataService.getCurrentDate();
  }

  addList(from, to, type): void {
    console.log('addList function works');
    this.getListsService.createList(from, to, type)
      .subscribe(list => {
        // this.lists.push(list);
        console.log('new leave' + list);
      },
      error => {this.errorMessage = <any>error});

    this.router.navigate(['/home/list']);
  }

}
