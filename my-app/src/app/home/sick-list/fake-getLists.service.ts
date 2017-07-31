import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {FormatList} from './dbFormatList';

export const testList = [
  {dateFrom: '12-07-2016', dateTo: '13-07-2016', type: 'vacation'},
  {dateFrom: '12-07-2016', dateTo: '13-07-2016', type: 'vacation'},
  {dateFrom: '12-07-2016', dateTo: '13-07-2016', type: 'vacation'},
  {dateFrom: '12-07-2016', dateTo: '13-07-2016', type: 'vacation'}
]  as FormatList[];

export class GetListsStub {
  public getLists(url: string): Observable<FormatList[]> {
    return Observable.of(testList);
  }

  // ...
}
