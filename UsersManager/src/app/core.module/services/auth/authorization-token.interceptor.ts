import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthorizationService } from './authorization.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationTokenInterceptor implements HttpInterceptor {
  constructor(public authorizationService: AuthorizationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('--- AuthorizationTokenInterceptor ---');
    if (this.authorizationService.isAuth()) {
      console.log("-- AuthorizationTokenInterceptor: User is authorized, token added to the request");
      request = request.clone({
        setHeaders: {
          Authorization: this.authorizationService.getToken()
        }
      });
    }
    return next.handle(request);
  }
}

 
