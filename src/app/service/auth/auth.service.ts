
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'src/app/models/auth';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiURL: string;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {
    this.apiURL = `${environment.baseURL}/auth`
  }

  isLogin(auth: Auth) {
     return this.httpClient
     .post(this.apiURL, auth)
     .pipe(
       tap((resp) => {
         this.userService.setTakeUserClient(resp)
       })
     );
  }
}
