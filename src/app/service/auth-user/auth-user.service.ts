import { Injectable } from '@angular/core';

const USER = 'usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  hasToken() {
    return !!this.getToken();
  }

  setToken(auth) {
    window.localStorage.setItem(USER, auth);
  }

  getToken() {
    return window.localStorage.getItem(USER);
  }

  removeToken() {
    window.localStorage.removeItem(USER);
  }
}
