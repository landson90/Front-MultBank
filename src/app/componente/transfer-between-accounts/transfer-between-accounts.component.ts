import { Component, OnInit } from '@angular/core';
import { ClientUser } from 'src/app/models/client-user';

@Component({
  selector: 'app-transfer-between-accounts',
  templateUrl: './transfer-between-accounts.component.html',
  styleUrls: ['./transfer-between-accounts.component.css']
})
export class TransferBetweenAccountsComponent implements OnInit {

  clintUserAccount: ClientUser;
  titleCard = "Transferencia";
  btnTitle = "Finalizar";
  isTransferActive = true;

  constructor() { }

  ngOnInit(): void {
  }

}
