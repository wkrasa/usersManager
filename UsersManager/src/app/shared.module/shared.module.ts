import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './test.component';


@NgModule({
    imports: [],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ],
    providers: [
      ]
})
export class SharedModule { }
