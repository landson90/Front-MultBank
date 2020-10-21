import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
    this.assembleForm();
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

  private assembleForm() {
    if(TypeTransactionEnum.DEPOSITAR === this.typeTransactionForm) {
      this.orderForm = this.formBuilder.group({
        accountClient: [this.clintUserAccount.account],
        valueTransaction: ['', Validators.required],
        accountOtherClient: [''],
        transactionEnum: ['DEPOSITO']
      });
    } else if (TypeTransactionEnum.SAQUE === this.typeTransactionForm) {
      this.orderForm = this.formBuilder.group({
        accountClient: [this.clintUserAccount.account],
        valueTransaction: ['', Validators.required],
        accountOtherClient: [''],
        transactionEnum: ['SAQUE']
      })
    }


  }
  private goTransactionDeposit() {
    const deposit = this.getBankingTransaction();
    if(deposit.valueTransaction > 0 ) {
      this.transactionBankService.makeDeposit(deposit)
      .subscribe(resp => {
        const { msg, value } = resp;
        const msgSuccessModal = `${msg} Saldo em conta ${value}`;
        this.modalAlertService.showALertSuccess(msgSuccessModal);
        this.transactionBankService.setCardVisibility(true);
        this.updateLocalStorageClient(value);
      });

    } else  {
      this.modalAlertService.showALertDanger("Valor invalido !");
    }
    this.assembleForm();
  }

  private getDrift() {
    console.log(this.getBankingTransaction())
    const deposit = this.getBankingTransaction();

    if( this.clintUserAccount.balance >= deposit.valueTransaction && deposit.valueTransaction > 0) {
        this.transactionBankService.getDrift(deposit).subscribe((resp) => {
          const { msg, value } = resp;
          const msgSuccessModal = `${msg} Saldo em conta ${value}`;
          this.modalAlertService.showALertSuccess(msgSuccessModal);
          this.transactionBankService.setCardVisibility(true);
          this.updateLocalStorageClient(value);
        });
    } else {
      this.modalAlertService.showALertDanger("Valor invalido !");
    }
    this.assembleForm();
  }

  private getBankingTransaction() {
    const bankingTransaction = this.orderForm.getRawValue() as BankingTransaction;
    return bankingTransaction
  }
  updateLocalStorageClient(balance: number) {
    this.clintUserAccount.balance = balance;
    this.userService.updateClientLocalStorage(this.clintUserAccount);
  }
}
