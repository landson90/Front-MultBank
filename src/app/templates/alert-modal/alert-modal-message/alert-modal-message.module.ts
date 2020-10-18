import { AlertModalMessageComponent } from 'src/app/templates/alert-modal/alert-modal-message/alert-modal-message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AlertModalMessageComponent
  ],
  exports: [
    AlertModalMessageComponent
  ],

  imports: [
    CommonModule
  ],
  entryComponents: [
    AlertModalMessageComponent
  ]
})
export class AlertModalMessageModule { }
