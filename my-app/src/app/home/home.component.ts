import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 vacations: number;
 sickLists: number;

  constructor() { }

  ngOnInit() {
    this.vacations = 14;
    this.sickLists = 5;
  }

}
