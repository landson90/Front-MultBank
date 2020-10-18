import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ModalAlertService } from 'src/app/service/modal-alert/modal-alert.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  orderFrom: FormGroup;

  constructor(
    private router: Router,
    private formBuild: FormBuilder,
    private authService: AuthService,
    private alertModalService: ModalAlertService
  ) { }

  ngOnInit(): void {
    this.orderFrom = this.formBuild.group({
      email: [
        '',
        [Validators.required,
        Validators.email]
      ],
      password: [
        '',
        [Validators.required,
        Validators.min(6),
       ]
      ]
    })

  }

  singUp() {
    this.router.navigate(['sung-up']);
  }
  login() {
   const auth = this.orderFrom.getRawValue() as Auth;
   this.authService.isLogin(auth)
       .subscribe(() => {
          this.router.navigate(['home']);
       },
       (() => {
         this.alertModalService.showALertDanger("E-mail ou Password está incorreto !")
       })
       );

  }

}
