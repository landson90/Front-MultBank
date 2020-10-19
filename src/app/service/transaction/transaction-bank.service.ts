import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankingTransaction } from 'src/app/models/banking-transaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionBankService {

  private apiURL: string;
  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiURL = `${environment.baseURL}/historico`
   }

   makeDeposit(deposit: BankingTransaction) {
     return this.httpClient.post(this.apiURL, deposit)
   }
}
