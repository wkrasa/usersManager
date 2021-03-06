import { Component, Input, ViewChild, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, fromEvent, of, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class BaseService {

   protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    })
  };

  //protected handleError(error: HttpErrorResponse) {
  //  if (error.error instanceof ErrorEvent) {
  //    // A client-side or network error occurred. Handle it accordingly.
  //    console.error('An error occurred:', error.error.message);
  //  } else {
  //    // The backend returned an unsuccessful response code.
  //    // The response body may contain clues as to what went wrong,
  //    console.error(
  //      `Backend returned code ${error.status}, ` +
  //      `body was: ${error.error}`);
  //  }
  //  // return an observable with a user-facing error message
  //  return throwError(
  //    'Something bad happened; please try again later.');
  //};
}
