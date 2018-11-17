import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test',
    template: `<div>say {{message}}</div>`
})
export class TestComponent implements OnInit
{
  @Input() message: string;
    constructor() {
    }

  ngOnInit() {
    console.log(this.message);
  }


}
