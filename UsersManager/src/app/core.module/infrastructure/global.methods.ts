import * as moment from 'moment';

export class GlobalMethods  {

  static toDate(str: string, format?: string | null): Date {
    if (format) {
      moment(str, format).toDate();
    }
    else {
      return moment(str).toDate();
    }
  }

}
