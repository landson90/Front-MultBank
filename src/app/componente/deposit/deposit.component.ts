import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankingTransaction } from 'src/app/models/banking-transaction';
import { ClientUser } from 'src/app/models/client-user';
import { TransactionVo } from 'src/app/models/transaction-vo';
import { ModalAlertService } from 'src/app/service/modal-alert/modal-alert.service';
import { TransactionBankService } from 'src/app/service/transaction/transaction-bank.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  orderForm: FormGroup;
  clintUserAccount: ClientUser;

  constructor(
    private transactionBankService: TransactionBankService,
    private modalAlertService: ModalAlertService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAccount();
    this.orderForm = this.formBuilder.group({
      accountClient: [this.clintUserAccount.account],
      valueTransaction: ['', Validators.required],
      accountOtherClient: [''],
      transactionEnum: ['DEPOSITO']
    })

  }

  private getAccount() {

    this.userService.getUserClientAccount().subscribe(resp => this.clintUserAccount = resp );
  }

  makeDeposit() {
    const deposit = this.orderForm.getRawValue() as BankingTransaction;
    if(deposit.valueTransaction > 0) {
      this.transactionBankService.makeDeposit(deposit)
      .subscribe(resp => {
        const { msg, value } = resp;
        const msgSuccessModal = `${msg} Saldo em conta ${value}`;
        this.modalAlertService.showALertSuccess(msgSuccessModal);
        this.transactionBankService.setCardVisibility(true);
      });

    } else  {
      this.modalAlertService.showALertDanger("Valor invalido !");
    }

  }


}
