import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const updatedRequest = request.clone({
      headers: request.headers.set('X-Auth-Token', '42a079deb0e84416b3f21dc4392fd2b3'),
    });
    return next.handle(updatedRequest);
  }
}
