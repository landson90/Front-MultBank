import { UsuarioCliente } from './../../../models/usuario-cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioClienteService } from 'src/app/service/cliente/usuario-cliente.service';
import { ModalAlertService } from 'src/app/service/modal-alert/modal-alert.service';

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
    private usuarioClienteService: UsuarioClienteService,
    private alertModalService: ModalAlertService
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      nome: [
        'teste',
        [
          Validators.required,
        ]],
      email:  [
        'landson@gmail.com',
        [
          Validators.required,
          Validators.email
        ]],
      password:  [
        '123456',
        [
          Validators.required,
          Validators.min(6),
          Validators.max(11)
        ]],
      cpf: [
        '00011122233',
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
          console.log(error, 1);
          console.log(error.error.msg, 2);

          console.log(error.error.errors, 3);
          const { msg } = error.error
          this.alertModalService.showALertDanger(msg)


        })
        );
  }
}
