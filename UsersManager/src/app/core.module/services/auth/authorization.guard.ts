import { Component, Input, ViewChild, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, fromEvent, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { WEB_CONFIG, IWebConfig } from '../../web.config';
import { BaseService, GlobalMethods } from '../../infrastructure';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(
    @Inject(WEB_CONFIG) private webConfig: IWebConfig,
    private authService: AuthorizationService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth() === false) {
      console.log("-- AuthorizationGuard: User not authorized and route requires authorization");
      this.router.navigate([this.webConfig.loginPage]);
      return false;
    }
    return true;
  }
}


