
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeModule } from './home/home/home.module';
import { HistoricComponent } from './historic/historic.component';
import { MatTableModule } from '@angular/material/table';
import { DepositComponent } from './deposit/deposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateInitialModule } from '../templates/template-initial.module';
import { CashOutComponent } from './cash-out/cash-out.component';

@NgModule({
  declarations: [
    HistoricComponent,
    DepositComponent,
    CashOutComponent,

  ],
  imports: [
    CommonModule,
    HomeModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateInitialModule
  ]
})
export class ComponenteInitialModule { }
