import { FieldsError } from './fields-error';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalMessageComponent } from 'src/app/templates/alert-modal/alert-modal-message/alert-modal-message.component';

export enum AlertType  {
  DANGER   = 'danger',
  SUCCESS  = 'success',
  WARNING  = 'warning',
}
@Injectable({
  providedIn: 'root'
})
export class ModalAlertService {

  private fieldsErrors: FieldsError[] = [];
  constructor(private modalService: BsModalService) {}


  private showAlert(message: string, type: AlertType, fieldsErrorList?: FieldsError[], canDisplayModal?: boolean) {

    const bsModalRef: BsModalRef  = this.modalService.show(AlertModalMessageComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    bsModalRef.content.fieldsErrors = fieldsErrorList;
    bsModalRef.content.canDisplayModal = canDisplayModal;

  }
  private convertInListFieldsErrors(fields?: any) {

    if(fields === undefined) {
      return null;
    }
    this.fieldsErrors = fields.map(fieldList => new FieldsError(fieldList.fieldName, fieldList.message));
    return this.fieldsErrors;
  }
  showALertDanger(message: string, fields?: any) {
    this.fieldsErrors = this.convertInListFieldsErrors(fields);
    this.showAlert(message, AlertType.DANGER, this.fieldsErrors, true);
  }
  showALertWarning(message: string) {
    this.showAlert(message, AlertType.WARNING);
  }

}
