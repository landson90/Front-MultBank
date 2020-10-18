import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalMessageComponent } from 'src/app/templates/alert-modal/alert-modal-message/alert-modal-message.component';

export enum AlertType  {
  DANGER = 'danger',
  SUCCESS = 'success'
}
@Injectable({
  providedIn: 'root'
})
export class ModalAlertService {

  constructor(private modalService: BsModalService) {}


  private showAlert(message: string, type: AlertType) {
    const bsModalRef: BsModalRef  = this.modalService.show(AlertModalMessageComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

  }

  showALertDanger(message: string) {

    this.showAlert(message, AlertType.DANGER);
  }
  showALertSuccess(message: string) {
    this.showAlert(message, AlertType.SUCCESS);
  }
}
