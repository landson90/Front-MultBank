import { Injectable } from '@angular/core';
import { ClientUser } from 'src/app/models/client-user';
const CLIENTE = 'cliente'
@Injectable({
  providedIn: 'root'
})
export class ClientUserService {

  constructor() { }

  setClientUser(clientUser: ClientUser) {
    window.localStorage.setItem(CLIENTE, JSON.stringify(clientUser));
  }
  getClientUSer() {
    return  window.localStorage.getItem(CLIENTE);
  }
}
