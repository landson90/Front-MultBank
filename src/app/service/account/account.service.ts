
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiURL: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiURL = `${environment.baseURL}/contas`
   }

   show(numberAccoun: string) {
     return this.httpClient.get<any>(`${this.apiURL}/?accountNumber=${numberAccoun}`);
   }


}
