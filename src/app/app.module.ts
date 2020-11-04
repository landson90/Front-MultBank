import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMaskModule } from 'ngx-mask'
import { CoreInitialModule } from './core/core-initial.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponenteInitialModule } from './componente/componente-initial.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModalMessageModule } from './templates/alert-modal/alert-modal-message/alert-modal-message.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreInitialModule,
    ComponenteInitialModule,
    ModalModule.forRoot(),
    AlertModalMessageModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
