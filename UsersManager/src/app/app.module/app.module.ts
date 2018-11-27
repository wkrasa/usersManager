import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component/app.component';
import { CoreModule, WEB_CONFIG, WebConfig, SHARED_DATA, SharedData } from '../core.module';
import { SharedModule } from '../shared.module/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,    
  ],
  providers: [
    { provide: WEB_CONFIG, useValue: WebConfig },
    { provide: SHARED_DATA, useValue: SharedData }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
