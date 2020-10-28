import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankingTransaction } from 'src/app/models/banking-transaction';
// import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { TransactionVo } from 'src/app/models/transaction-vo';
import { BehaviorSubject } from 'rxjs';
import { environment  } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class TransactionBankService {

  private apiURL: string;

  isUpdateCard = new BehaviorSubject<boolean>(null);

  constructor(
    private httpClient: HttpClient,
  ) {
    // this.apiURL = `${environment.baseURL}/historico`
    this.apiURL = `${environment.baseURL}/historico`
   }

  makeDeposit(deposit: BankingTransaction) {
    console.log(this.apiURL)
     return this.httpClient.post<TransactionVo>(`${this.apiURL}/depositar`, deposit);
  }

  getDrift(withdrawal: BankingTransaction) {
    return this.httpClient.post<TransactionVo>(`${this.apiURL}/saque`, withdrawal);
  }
  getTransaciont(withdrawal: BankingTransaction) {
    return this.httpClient.post<TransactionVo>(`${this.apiURL}/tranferencia`, withdrawal);
  }
  setCardVisibility(isValue: boolean) {
    this.isUpdateCard.next(isValue);
  }
  getCardVisibility() {
    return this.isUpdateCard.asObservable();
  }
}
