import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialImportModule } from '../shared.module/material-import.module';

import { AuthorizationService, UsersService, AuthorizationGuard, UnauthorizedInterceptor, AuthorizationTokenInterceptor, MessageBoxService, MessageBoxComponent, MessageBoxData } from './services';
import { WEB_CONFIG, WebConfig, SHARED_DATA, SharedData } from './web.config';
import { GlobalErrorHandler } from './/infrastructure/global.error.handler';

@NgModule({
  imports: [
    MaterialImportModule
  ],
  declarations: [
    MessageBoxComponent
  ],
  exports: [
    MessageBoxComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationTokenInterceptor, multi: true },
    AuthorizationGuard,
    AuthorizationService,
    { provide: WEB_CONFIG, useValue: WebConfig },
    { provide: SHARED_DATA, useValue: SharedData },
    UsersService,
    MessageBoxService
  ],
  entryComponents: [
    MessageBoxComponent
  ]
})
export class CoreModule { }
