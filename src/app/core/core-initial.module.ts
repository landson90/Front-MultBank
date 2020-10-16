import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { SignModule } from './sign-in/sign.module';

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
