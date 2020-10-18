import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMessageComponent } from './error/v-message/v-message.component';

@NgModule({
  declarations: [
    VMessageComponent,

  ],
  exports: [
    VMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateInitialModule { }
