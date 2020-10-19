import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home/home.module';
import { HistoricComponent } from './historic/historic.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HistoricComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    MatTableModule
  ]
})
export class ComponenteInitialModule { }
