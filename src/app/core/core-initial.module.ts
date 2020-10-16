import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignModule } from './sign-in/sign.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SignModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
})
export class CoreInitialModule { }
