import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider,FacebookLoginProvider } from "angularx-social-login";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lbody',
  templateUrl: './lbody.component.html',
  styleUrls: ['./lbody.component.css']
})
export class LbodyComponent implements OnInit {
  logeado: boolean = false;
  usuario:SocialUser;
  RegistroForm: FormGroup;
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        this.logeado=true;
        this.usuario=user;
      }
      else
      {
        this.logeado=false;
      }
    });
    this.RegistroForm = this.formBuilder.group
      (
        {
          correo: new FormControl('',[Validators.nullValidator,Validators.email]),
          datos: new FormControl('',Validators.nullValidator),
          DNI: new FormControl('00000000',[Validators.nullValidator,Validators.minLength(8),Validators.maxLength(8)]),
          contrasena: new FormControl('',[Validators.nullValidator]),
          recontrasena: new FormControl('',Validators.nullValidator),
          fechana: new FormControl('dd/MM/yyyy',[Validators.required])
        }
      );
  }
  accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  accederConFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  Salir(): void {
    this.authService.signOut();
  }
  get correo() {
    return this.RegistroForm.get('correo');
  }
  get datos() {
    return this.RegistroForm.get('datos');
  }
  get DNI() {
    return this.RegistroForm.get('DNI');
  }
  get contrasena() {
    return this.RegistroForm.get('contrasena');
  }
  get recontrasena() {
    return this.RegistroForm.get('recontrasena');
  }
  get fechana() {
    return this.RegistroForm.get('fechana');
  }




  validarregistro(datos)
  {
    console.log(datos);
  }
}
