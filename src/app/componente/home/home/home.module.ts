import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/templates/header/header/header.component';
import { MenuComponent } from 'src/app/templates/menu/menu/menu.component';
import { FooterComponent } from 'src/app/templates/footer/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
