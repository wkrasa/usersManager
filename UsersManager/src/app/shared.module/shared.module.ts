import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSliderModule } from '@angular/material';

import { TestComponent } from './test.component/test.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule
  ],
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
