import { OnInit } from '@angular/core';
import { AccountService } from './../../service/account/account.service';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { TransactionBankService } from 'src/app/service/transaction/transaction-bank.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-client-home',
  templateUrl: './card-client-home.component.html',
  styleUrls: ['./card-client-home.component.css'],
})
export class CardClientHomeComponent implements OnChanges {
  @Input() clientName: string;
  @Input() clientAccount: string;
  @Input() clientBalance: number;
  balance: number;
  isValeuBoolean$: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private accountService: AccountService,
    private transactionBankService: TransactionBankService
  ) { }



  ngOnChanges(changes: SimpleChanges): void {
    this.getExtractBoolean()
  }

  getExtractBoolean() {

    this.transactionBankService
    .getCardVisibility()
    .subscribe((resp) => {
      this.isValeuBoolean$ = resp;
      this.reaload(resp)
    })
  }

  reaload(isReload: boolean) {
    if(isReload === true) {
      this.accountService.show(this.clientAccount)
          .subscribe(resp => this.balance = resp.balance)
    } else {
      this.balance = this.clientBalance;
    }

  }
  getOutOfTheSystem() {
    this.router.navigate(['']);
    this.userService.logout();
  }
}
