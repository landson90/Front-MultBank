import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  orderForm: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.required,
        ]],
      email:  [
        '',
        [
          Validators.required,
          Validators.email
        ]],
      password:  [
        '',
        [
          Validators.required,
          Validators.min(6),
          Validators.max(11)
        ]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.min(11),
        ]],
      dateOfBirth: [
        '',
        [
          Validators.required,
          Validators.min(11),
        ]],
      usuarioId: [0]
    })
  }

  singIn() {
    this.router.navigate(['']);
  }
  createClientUser() {
    console.log(this.orderForm.getRawValue())
  }
}
