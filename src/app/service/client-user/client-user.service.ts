import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientUser } from 'src/app/models/client-user';
const CLIENTE = 'cliente'
@Injectable({
  providedIn: 'root'
})
export class ClientUserService {

  private userSebject = new BehaviorSubject<ClientUser>(null);
  constructor() { }

  setClientUser(clientUser: ClientUser) {
    window.localStorage.setItem(CLIENTE, JSON.stringify(clientUser));
  }

  getClientUser() {
    return  window.localStorage.getItem(CLIENTE);
  }

  getUser() {
   const userClient: ClientUser = JSON.parse(this.getClientUser())
   this.returnUseClient(userClient);
   return this.userSebject.asObservable();
  }

  logout() {
    this.userSebject.next(null);
  }

  isRemoveClient() {
    window.localStorage.removeItem(CLIENTE);
  }

 private  returnUseClient(user: ClientUser) {
    this.userSebject.next(user);
  }
}
