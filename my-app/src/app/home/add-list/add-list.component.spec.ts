import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AddListComponent } from './add-list.component';
import {CurrentDataService} from '../../current-data.service';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('AddListComponent', () => {
  let component: AddListComponent;
  let fixture: ComponentFixture<AddListComponent>;
  let componentCurrentDataService: CurrentDataService; // the actually injected service
  let currentDataService: CurrentDataService;
  let form: DebugElement;
  // let form: HTMLElement;

  let currentDataServiceStub = {
    getCurrentDate() {
      return{
        year: 2017,
        month: 1,
        day: 1
      };
    }
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AddListComponent ],
      providers: [ {provide: CurrentDataService, useValue: currentDataServiceStub } ],
      imports: [ FormsModule, NgbModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(AddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    currentDataService = fixture.debugElement.injector.get(CurrentDataService);
    componentCurrentDataService = currentDataService;
    currentDataService = TestBed.get(CurrentDataService);

    form = fixture.debugElement.query(By.css('#addListForm'));
    // form = de.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should inject the component\'s CurrentDataService instance',
    inject([CurrentDataService], (service: CurrentDataService) => {
      expect(service).toBe(componentCurrentDataService);
    }));

  it('should set today date in minDate', () =>{
    expect(component.setMinDate).toHaveBeenCalled();
    const date = currentDataService.getCurrentDate();
    expect(component.minDate).toBe(date);
  });

  it('Should take submit == true after submitting form', ()=>{
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.submitted).toBe(true);
  });

});
