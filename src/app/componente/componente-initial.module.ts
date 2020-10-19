import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeModule } from './home/home/home.module';
import { HistoricComponent } from './historic/historic.component';
import { MatTableModule } from '@angular/material/table';
import { DepositComponent } from './deposit/deposit.component';


@NgModule({
  declarations: [
    HistoricComponent,
    DepositComponent,

  ],
  imports: [
    CommonModule,
    HomeModule,
    MatTableModule,
    MatExpansionModule
  ]
})
export class ComponenteInitialModule { }
