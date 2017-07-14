import {Component, OnInit, ViewChild} from '@angular/core';

import {LoginComponent} from './login/login.component'; //ChildComponent

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  @ViewChild (LoginComponent) loginComponent: LoginComponent;
  constructor() { }

  ngOnInit() {
  }

}
