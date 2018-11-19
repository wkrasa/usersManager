import { Component, OnInit, Input } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit
{
  data: any = {
    check: true
  };
  

  @Input() message: string;
  constructor() {
    setInterval(() => this.data.check = !this.data.check, 1000);
    }

  ngOnInit() {
    console.log(this.message);
  }

  cbChanged(event: any, val: boolean) {
    this.data.check = event.checked;
    console.log('test: ', event.checked, this.data.check);

  }
  

}
