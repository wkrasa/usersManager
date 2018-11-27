import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';
// import { setInterval } from 'timers';

import { User, WEB_CONFIG, IWebConfig, SHARED_DATA, SharedData } from '../../core.module';


const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit
{
  data: any = {
    check: true
  };

  dataFromWeb: any = {};

  @Input() message: string;

  constructor(private http: HttpClient,
    @Inject(WEB_CONFIG) private webConfig: IWebConfig,
    @Inject(SHARED_DATA) private sharedData: any) {
    setInterval(() => this.data.check = !this.data.check, 1000);
      this.sharedData.test2 = 2222222;
      console.dir(this.sharedData);
    }

  test<T>(obj:T) {
    
  }
  ngOnInit() {
    console.log(`message: ${this.message}`);
    this.http.get<User[]>(this.webConfig.dataUrlUsers).subscribe(response => {
      console.dir(response[0].constructor.name);
      console.dir(response);
      console.dir(response.map(x => moment(x.lastLogin, 'yyyy-MM-dd')));
      console.dir(response.map(x => new User()));
      this.dataFromWeb = response;      
    });

    var a = moment('1952-01-01');
    var b = moment('1952-01-01').toDate();

    console.log(a.constructor.name);
    console.log(b.constructor.name);
    console.log(b instanceof Date);    

    this.http.post(this.webConfig.dataUrlUsers, { login: 'test', email: '123@test.com', lastLogin: moment('1952-01-01').toDate() }, httpOptions).
      subscribe((response) => {
        console.dir(response);
      });

    this.http.get(this.webConfig.dataUrlGroups).     
      subscribe((response) => {
        console.dir(response);
      });
   
  }

  cbChanged(event: any, val: boolean) {
    this.data.check = event.checked;
    console.log('test: ', event.checked, this.data.check);
    this.sharedData.test += 1;
    console.dir(this.sharedData);
  }
  

}
