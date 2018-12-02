import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthorizationService } from './authorization.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WEB_CONFIG, IWebConfig } from '../../web.config';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(
    @Inject(WEB_CONFIG) private webConfig: IWebConfig,
    private authorizationService: AuthorizationService,
    private router: Router ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          catchError(err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            console.log("-- UnauthorizedInterceptor: 401 response status, user is NOT authorized, redirection to login page");
            this.authorizationService.logout();
            this.router.navigate([this.webConfig.loginPage]);
            }
            return throwError(err);
          })
        );
    }
}

 
