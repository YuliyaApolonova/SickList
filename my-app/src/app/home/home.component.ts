import { Component, OnInit } from '@angular/core';
import {GetListsService } from '../get-lists.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vacations: number;
  sickLists: number;

  constructor(private getListsService: GetListsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.vacations = 14;
    // this.sickLists = 5;
    this.getVacationInd();
    this.getSickInd();
  }

  getVacationInd(): void {
    this.getListsService.getVacationInd().subscribe(vacations => this.vacations = vacations);
  }

  getSickInd(): void {
    this.getListsService.getSickInd().subscribe( sickLists => this.sickLists = sickLists);
  }

  logout(): void {
    this.authService.logout();
  }

}
