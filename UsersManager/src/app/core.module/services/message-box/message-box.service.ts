import { Component, Input, ViewChild, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable, fromEvent, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MessageBoxComponent } from './message-box.component';
import { MessageBoxData } from './message-box.data';

@Injectable()
export class MessageBoxService {

  constructor(private matDialogService: MatDialog) {
  }
  
  showMessageBox(title: string, message: string) {
    const dialogRef = this.matDialogService.open(MessageBoxComponent, {
      width: '300px',
      height: '200px',
      data: { title: title, message: message }      
    });

    return dialogRef.afterClosed();
  }  
}
