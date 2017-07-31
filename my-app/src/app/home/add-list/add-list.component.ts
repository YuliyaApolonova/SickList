import {Component, OnInit} from '@angular/core';

import {SickList} from '../list';
import {IDate} from '../../date';
import {FormatList} from '../sick-list/dbFormatList';

import {CurrentDataService} from '../../current-data.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})

export class AddListComponent implements OnInit {

  minDate: IDate = { year: 2017, month: 1, day: 1 };

  lists: FormatList[] = [
    {'dateFrom': '2017-03-12', 'dateTo': '2017-04-05', 'type': 'vacation'}
  ];

  constructor(private currentDataService: CurrentDataService) {  }

  model = new SickList(null, null, '' ); // в input приходит object

  types = ['vacation', 'sick-list'];

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    let dateFrom = this.model.dateFrom.year + '-' + this.model.dateFrom.month + '-' + this.model.dateFrom.day;
    let dateTo = this.model.dateTo.year + '-' + this.model.dateTo.month + '-' + this.model.dateTo.day;
    let type = this.model.type;
    this.lists.push({'dateFrom': dateFrom, 'dateTo': dateTo, 'type': type});
    console.log(this.lists);

    // registerUser(form: NgForm) {
    //   console.log(form.value);
      // {email: '...', password: '...'}
      // ... <-- now use JSON.stringify() to convert form values to json.
    // }
  }

  ngOnInit(): void {
   this.setMinDate();
  }

 setMinDate(): void {

   this.minDate = this.currentDataService.getCurrentDate();

  }

}
