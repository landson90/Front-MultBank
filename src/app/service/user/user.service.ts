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

  constructor(
    private tokenService: TokenService,
    private clientUserService: ClientUserService
   ) { }

  private setToken(token: string) {
     this.tokenService.setToken(token);
   }

   logout() {
     this.tokenService.removeToken();
     this.clientUserService.isRemoveClient();
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

   getUserClientAccount() {
     return this.clientUserService.getUser();
   }
}
