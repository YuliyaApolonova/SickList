import { Component, OnInit } from '@angular/core';
import {GetListsService } from '../get-lists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vacations: number;
  sickLists: number;

  constructor(private getListsService: GetListsService) {
  }

  ngOnInit(): void {
    // this.vacations = 14;
    // this.sickLists = 5;
    this.getVacationInd();
    this.gatSickInd();
  }

  getVacationInd(): void {
    this.getListsService.getVacationInd().subscribe(vacations => this.vacations = vacations);
  }

  gatSickInd(): void {
    this.getListsService.getSickInd().subscribe( sickLists => this.sickLists = sickLists);
  }

}
