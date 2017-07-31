/**
 * Created by user on 26.07.17.
 */
import {CurrentDataService} from "./current-data.service";
import {IDate} from "./date";

describe('Service: GetCurrentDataService', () => {
  let service: CurrentDataService;

beforeEach(() => { service = new CurrentDataService(); });

it('#getCurrentData should return current date object',  (done: DoneFn) => {
  service = new CurrentDataService();
  let date = service.getCurrentDate();
  expect(date instanceof IDate);
    done();
  });
});
