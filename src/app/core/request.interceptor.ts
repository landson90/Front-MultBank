import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {


  constructor(
    private tokenService: TokenService ) {

    }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    if(token !== null) {
      req = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      })
    }
    return next.handle(req);
  }

}
