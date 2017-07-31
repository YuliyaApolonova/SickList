/**
 * Created by user on 17.07.17.
 */
import {IDate} from '../date';
export class SickList {
  constructor(
    public dateFrom: IDate,
    public dateTo: IDate,
    public type: string
  ) {  }
}
