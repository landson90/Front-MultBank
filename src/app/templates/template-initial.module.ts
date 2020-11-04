import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMessageComponent } from './error/v-message/v-message.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    VMessageComponent,
    TransactionFormComponent,

  ],
  exports: [
    VMessageComponent,
    TransactionFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class TemplateInitialModule { }
