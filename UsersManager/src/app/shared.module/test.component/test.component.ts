import { Component, OnInit, Input } from '@angular/core';

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
    }

  ngOnInit() {
    console.log(this.message);
  }

  cbChanged(event: any, val: boolean) {
    this.data.check = event.checked;
    console.log('test: ', event.checked, this.data.check);

  }

}
