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
  getClientUSer() {
    return  window.localStorage.getItem(CLIENTE);
  }
  getUser() {
    return this.userSebject.asObservable();
  }
  logout() {
    this.userSebject.next(null);
  }
}
