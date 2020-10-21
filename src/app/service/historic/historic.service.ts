import { Historic, PageItem } from './../../models/historic';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  private apiURL: string;

  constructor(
    private httpClient: HttpClient,

  ) {
    this.apiURL = `${environment.baseURL}/historico`
  }

  listHistoricClient(accountId: number, numberPage: number) {
    console.log(numberPage, 2)
    return this.httpClient.get<PageItem>(`${this.apiURL}/${accountId}?page=${numberPage}`);
  }
}
