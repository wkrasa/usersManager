import { Component, Input, ViewChild, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, fromEvent, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { WEB_CONFIG, IWebConfig } from '../web.config';
import { User } from '../models';
import { BaseService, GlobalMethods } from '../infrastructure';

@Injectable()
export class UsersService extends BaseService {

  constructor(private http: HttpClient,
    @Inject(WEB_CONFIG) private webConfig: IWebConfig) {
    super();
  }

  getUser(id: number): Observable<User | undefined> {
    return this.http.get<User>(`${this.webConfig.dataUrlUsers}/${id}`)
      .pipe(
      map(x => {
        x.lastLogin = GlobalMethods.toDate(x.lastLogin.toString());
        return x;
      }),
      catchError(error => {
        // this.popupService.showError(...);
      })
        
      );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.webConfig.dataUrlUsers);
  }

  saveUser(user: User): Observable<User> {
    if (user.id > 0) {  // Update
      return this.http.put<User>(this.webConfig.dataUrlUsers, user, this.httpOptions);
    }
    else {  // Creation
      return this.http.post<User>(this.webConfig.dataUrlUsers, user, this.httpOptions);
    }   
  }

  deleteUser(id: number): Observable<User | undefined> {
    var url = `${this.webConfig.dataUrlUsers}/${id}`;
    return this.http.delete<User>(url);
  }
}
