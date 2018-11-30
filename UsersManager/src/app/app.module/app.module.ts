import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component/app.component';
import { CoreModule, WEB_CONFIG, WebConfig, SHARED_DATA, SharedData } from '../core.module';
import { SharedModule } from '../shared.module/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([], { enableTracing: true }),
    BrowserModule,
    CoreModule,
    SharedModule,    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
