import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMessageComponent } from './error/v-message/v-message.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';

@NgModule({
  declarations: [
    VMessageComponent,
    TransactionFormComponent,

  ],
  exports: [
    VMessageComponent,
    TransactionFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateInitialModule { }
