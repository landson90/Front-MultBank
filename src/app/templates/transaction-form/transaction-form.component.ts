import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankingTransaction } from 'src/app/models/banking-transaction';
import { ClientUser } from 'src/app/models/client-user';
import { ModalAlertService } from 'src/app/service/modal-alert/modal-alert.service';
import { TransactionBankService } from 'src/app/service/transaction/transaction-bank.service';
import { UserService } from 'src/app/service/user/user.service';

export enum TypeTransactionEnum {
  DEPOSITAR = 'DEPOSITAR',
  SAQUE = 'SAQUE'
}
@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  @Input() titleCard: string;
  @Input() btnTitle: string;
  @Input() typeTransactionForm: string;
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
  persistenceTransactionForm() {
    if(TypeTransactionEnum.DEPOSITAR === this.typeTransactionForm) {
      this.goTransactionDeposit();
    }
    if(TypeTransactionEnum.SAQUE === this.typeTransactionForm) {
      this.getDrift()
    }
  }

  private goTransactionDeposit() {
    const deposit = this.getBankingTransaction();
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

  private getDrift() {

  }

  private getBankingTransaction() {
    const bankingTransaction = this.orderForm.getRawValue() as BankingTransaction;
    return bankingTransaction
  }
}
