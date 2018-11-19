import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialImportModule } from './material-import.module';

import { ContentComponent } from './content.component/content.component';
import { FooterComponent } from './footer.component/footer.component';
import { HeaderComponent } from './header.component/header.component';
import { SideComponent } from './side.component/side.component';
import { TestComponent } from './test.component/test.component';

const sharedModules = [
  ContentComponent,
  FooterComponent,
  HeaderComponent,
  SideComponent,
  TestComponent
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialImportModule,
  ],
  declarations: sharedModules,
  exports: [    
    FormsModule,
    MaterialImportModule
  ].concat(sharedModules),
    providers: [
      ]
})
export class SharedModule { }
