import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialImportModule } from './material-import.module';

import { ContentComponent } from './content.component/content.component';
import { FooterComponent } from './footer.component/footer.component';
import { HeaderComponent } from './header.component/header.component';
import { SideComponent } from './side.component/side.component';
import { LoginComponent } from './login.component/login.component';

import { TestComponent } from './test.component/test.component';

const sharedModules = [
  ContentComponent,
  FooterComponent,
  HeaderComponent,
  SideComponent,
  LoginComponent,
  TestComponent
];

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialImportModule,
  ],
  declarations: sharedModules,
  exports: [    
    FormsModule,
    MaterialImportModule,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SideComponent,
    LoginComponent,
    TestComponent
  ],
    providers: [
      ]
})
export class SharedModule { }
