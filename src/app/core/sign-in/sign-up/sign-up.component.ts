import { UsuarioCliente } from './../../../models/usuario-cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioClienteService } from 'src/app/service/cliente/usuario-cliente.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  orderForm: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioClienteService: UsuarioClienteService
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
          Validators.pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
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
    const clientUser = this.orderForm.getRawValue() as UsuarioCliente;
    this.usuarioClienteService.store(clientUser)
        .subscribe((resp) => {
          console.log(resp)
        },
        ((error) => {
         console.log(error)
        })
        );
  }
}
