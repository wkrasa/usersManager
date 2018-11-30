import { Component, Input, ViewChild, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, fromEvent, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { WEB_CONFIG, IWebConfig } from '../../web.config';
import { BaseService, GlobalMethods } from '../../infrastructure';

@Injectable()
export class AuthorizationService {

  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient,
    @Inject(WEB_CONFIG) private webConfig: IWebConfig) {
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }

  getToken(): string {
    return this.isAuthenticated ? 'ok' : null;
  }
}

 
