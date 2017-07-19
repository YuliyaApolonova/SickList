/**
 * Created by user on 19.07.17.
 */
/**
 * Created by user on 18.07.17.
 */

import { Injectable } from '@angular/core';


@Injectable()
export class CurrentDataService {

  getCurrentDate() {

    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    return {
      year: year,
      month: month,
      day: day
    }
  }

}
