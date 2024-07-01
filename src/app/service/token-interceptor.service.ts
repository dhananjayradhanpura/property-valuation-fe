import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ApplicationStorageService } from './application-storage.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private applicationStorage: ApplicationStorageService) {
   }

   intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.includes("login")){
      return next.handle(req);
    }
    let token = this.applicationStorage.getAccessToken();
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token
      })
    });
    return next.handle(authReq);
  }
}
