
/**
 * Created by user on 18.07.17.
 */

import { Injectable } from '@angular/core';
import {IDate} from './date';

@Injectable()
export class CurrentDataService {

  getCurrentDate(): IDate {

    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    return {
      year: year,
      month: month,
      day: day
    };
  }

}
