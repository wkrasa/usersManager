import { BrowserModule,  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialImportModule } from '../shared.module/material-import.module';

import { AppComponent } from './app.component/app.component';
import { CoreModule, WEB_CONFIG, WebConfig, SHARED_DATA, SharedData, MessageBoxComponent } from '../core.module';
import { SharedModule } from '../shared.module/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([], { enableTracing: true }),
    BrowserModule,
    FormsModule,
    MaterialImportModule,
    CoreModule,
    SharedModule,    
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
