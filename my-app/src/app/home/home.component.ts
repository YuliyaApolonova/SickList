import { Component, OnInit, NgZone} from '@angular/core';
import {GetListsService } from '../get-lists.service';
import {AuthService} from '../auth.service';

import {IResponse} from '../response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  vacations: number;
  sickLeaves: number;

  constructor(private getListsService: GetListsService, private authService: AuthService) {
  }

  ngOnInit(): void {

    this.getVacationInd();
    this.getSickInd();
  }

  getVacationInd(): void {
    this.getListsService.getVacationInd().subscribe((response: IResponse) => {
      this.vacations = response.data;

    });
  }

  getSickInd(): void {
    this.getListsService.getSickInd().subscribe((response: IResponse) => {
      console.log('Response is here ' + response);
      this.sickLeaves = response.data;
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
