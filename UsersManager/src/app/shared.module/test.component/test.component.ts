import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { setInterval } from 'timers';


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
  dataUrlUsers: string = 'https://localhost:44345/api/users';
  dataUrlGroups: string = 'https://localhost:44345/api/groups';


  data: any = {
    check: true
  };

  dataFromWeb: any = {};
  

  @Input() message: string;
  constructor(private http: HttpClient) {
    setInterval(() => this.data.check = !this.data.check, 1000);
    }

  ngOnInit() {
    console.log(`message: ${this.message}`);
    this.http.get<any>(this.dataUrlUsers).subscribe(data => {
      console.dir(data);
      this.dataFromWeb = data;      
    });

    this.http.post(this.dataUrlUsers, { login: 'test', email: '123@test.com' }, httpOptions).
      subscribe((response) => {
        console.dir(response);
      });

    this.http.get(this.dataUrlGroups).
      subscribe((response) => {
        console.dir(response);
      });
   
  }

  cbChanged(event: any, val: boolean) {
    this.data.check = event.checked;
    console.log('test: ', event.checked, this.data.check);
  }
  

}
