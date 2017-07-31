/**
 * Created by user on 21.07.17.
 */
export class FormatList {
  constructor(
    public id: string,
    public dateFrom: string,
    public dateTo: string,
    public type: string
  ) { }
  // clone() { return new FormatList(this.dateFrom, this.dateTo, this.type); }
}
