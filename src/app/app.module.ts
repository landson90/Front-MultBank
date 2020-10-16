import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreInitialModule } from './core/core-initial.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponenteInitialModule } from './componente/componente-initial.module';




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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
