import { UsuarioCliente } from './../../models/usuario-cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioClienteService {


  private apiURL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiURL = `${environment.baseURL}/usuarios`
  }

  store(userClient: UsuarioCliente) {
    return this.httpClient.post(this.apiURL, userClient);
  }
}
