import { UserClient } from './../../models/user-client';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientUserService } from '../client-user/client-user.service';
import { ClientUser } from 'src/app/models/client-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSebject = new BehaviorSubject<UserClient>(null);

  constructor(
    private tokenService: TokenService,
    private clientUserService: ClientUserService
   ) { }

  private setToken(token: string) {
     this.tokenService.setToken(token);
   }
   getUser() {
     return this.userSebject.asObservable();
   }
   logout() {
     this.tokenService.removeToken();
     this.userSebject.next(null);
   }
   isLogin() {
     return this.tokenService.hasToken();
   }
   setTakeUserClient(userClient) {
    const {token} = userClient;
    const {clientId, accountId, name, email, account, balance} = userClient;
    this.setToken(token);
    this.clientUserService.setClientUser(new ClientUser(
      clientId,
      accountId,
      name,
      email,
      account,
      balance
    ));
   }
}
