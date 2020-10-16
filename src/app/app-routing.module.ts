import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { SignUpComponent } from './core/sign-in/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: "",
    component: SignInComponent
  },
  {
    path: "sung-up",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
