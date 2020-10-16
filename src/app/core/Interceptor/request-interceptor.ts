import { UserClient } from './../../models/user-client';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/auth';
import { AuthUserService } from 'src/app/service/auth-user/auth-user.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  userClient: UserClient;

  constructor(
    private authUserService: AuthUserService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.userClient = JSON.parse(this.authUserService.getToken());

   if(this.userClient.token !== null) {
     req = req.clone({
       setHeaders: {
        'Authorization': 'Bearer ' + this.userClient.token
       }
     })
   }
   return next.handle(req);

  }

}
