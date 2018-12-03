import { Component, Input, ViewChild, OnInit, Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, fromEvent } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { WEB_CONFIG, IWebConfig } from '../../web.config';
import { BaseService, GlobalMethods } from '../../infrastructure';

@Injectable()
export class AuthorizationService {


  private token: string = null;
  public loggedUser = null;

  constructor(private http: HttpClient,
    @Inject(WEB_CONFIG) private webConfig: IWebConfig) {
  }

  login(login: string, pass: string) {
    var data = { login: login, pass: pass };
    this.http.post(this.webConfig.dataUrlAuth, data, { observe: 'response' })
      .subscribe((response: HttpResponse<any>) => {
        console.dir(response);
        if (response.status === 200) {
          console.log("-- AuthorizationService: User successfully authorized, token saved");
          this.token = response.body.token;
          this.loggedUser = { id: response.body.id, login: response.body.login }
        }
        else {
        }
      });    
  }

  logout() {
    this.token = null;
    this.loggedUser = null;
  }

  isAuth(): boolean {
    return this.token != null;
  }

  getToken(): string {
    return this.isAuth() ? this.token : null;
  }
}

 
