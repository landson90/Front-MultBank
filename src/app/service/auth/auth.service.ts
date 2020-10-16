import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'src/app/models/auth';
import { AuthUserService } from '../auth-user/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiURL = `${environment.baseURL}/auth`
  }

  isLogin(auth: Auth) {
     return this.httpClient.post(this.apiURL, auth);
  }
}
