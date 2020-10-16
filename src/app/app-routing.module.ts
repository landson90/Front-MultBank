import { LonginGuard } from './core/guard-router/login/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componente/home/home/home.component';
import { AuthGuard } from './core/guard-router/auth/auth.guard';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { SignUpComponent } from './core/sign-in/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: "",
    component: SignInComponent,
    canActivate: [LonginGuard]
  },
  {
    path: "sung-up",
    component: SignUpComponent,
    canActivate: [LonginGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
