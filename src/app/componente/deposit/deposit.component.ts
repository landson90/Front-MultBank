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

  clintUserAccount: ClientUser;
  titleCard = "Depositar";
  btnTitle = "Finalizar";
  isTransferActive = false;

  constructor() { }

  ngOnInit(): void { }

}
