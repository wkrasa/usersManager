import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { setInterval } from 'timers';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit
{
  dataUrl: string = 'https://localhost:44345/api/values';

  data: any = {
    check: true
  };
  

  @Input() message: string;
  constructor(private http: HttpClient) {
    setInterval(() => this.data.check = !this.data.check, 1000);
    }

  ngOnInit() {
    console.log(`message: ${this.message}`);
    this.http.get<any>(this.dataUrl).subscribe(data => {
      console.dir(data);
      this.dataFromWeb = data;
    });
  }

  cbChanged(event: any, val: boolean) {
    this.data.check = event.checked;
    console.log('test: ', event.checked, this.data.check);
  }
  

}
