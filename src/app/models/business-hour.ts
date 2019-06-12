export class BusinessHour {
  opening_time: string;
  closing_time: string;
  day_of_week: string;
  day: string;
  week: Array<Object>;
  constructor() {
    this.week = [{
      'opening_time': '',
      'closing_time': '',
      'day_of_week': '0',
      'day': 'SUNDAY'
    },{
      'opening_time': '',
      'closing_time': '',
      'day_of_week': '1',
      'day': 'MONDAY'
    },{
      'opening_time': '',
      'closing_time': '',
      'day_of_week': '2',
      'day': 'TUESDAY'
    },{
      'opening_time': '',
      'closing_time': '',
      'day_of_week': '3',
      'day': 'WEDNESDAY'
    },{
      'opening_time': '',
      'closing_time': '',
      'day_of_week': '4',
      'day': 'THURSDAY'
    },{
      'opening_time': '',
      'closing_time': '',
      'day_of_week': '5',
      'day': 'FRIDAY'
    },{
      'opening_time': '',
      'closing_time': '',
      'day_of_week': '6',
      'day': 'SATURDAY'
    }];
  }
}
