import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component/app.component';
import { CoreModule } from '../core.module/core.module';
import { SharedModule } from '../shared.module/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
