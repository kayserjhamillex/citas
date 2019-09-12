import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angularx-social-login";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClinicaService } from 'src/app/clinica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validbody',
  templateUrl: './validbody.component.html',
  styleUrls: ['./validbody.component.css']
})
export class ValidbodyComponent implements OnInit {
  public usuario: SocialUser;
  public loggeIn:boolean;
  DatosForm: FormGroup;
  extrangero=false;
  dni;
  caresxt;
  fecha:Date;
  name;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private clinicaService :ClinicaService,
    private ruoter: Router,
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe((usuario)=>{
      this.usuario=usuario;
      this.loggeIn=(usuario != null);
    })
      this.DatosForm = this.formBuilder.group({
      DNI: new FormControl('00000000',
      [Validators.nullValidator,
      Validators.minLength(8),
      Validators.maxLength(8)]),
      Extrangeria: new FormControl('000000000000',
      [Validators.nullValidator,
      Validators.minLength(12),
      Validators.maxLength(12)]),
      FullName: new FormControl('',
      [Validators.required,
      Validators.minLength(20),
      Validators.maxLength(120)]),
      FNacimiento: new FormControl('dd/MM/yyyy',
      [Validators.required]),
    });
  }
  datospaciente(datos: any){
    console.log(datos);
  }
  esestrangero(){
    this.extrangero=true;
  }
  noestrangero(){
    this.extrangero=false;
  }

  get FullName() {
    return this.DatosForm.get('FullName');
  }
  get FNacimiento() {
    return this.DatosForm.get('FNacimiento');
  }
validacionusuario(cliente: any)
{
this.dni=cliente.DNI;
this.caresxt=cliente.Extrangeria;
this.fecha=new Date(cliente.FNacimiento);
this.name= cliente.FullName;
// console.log(this.dni);
// console.log(this.caresxt);
// console.log(this.fecha);
// console.log(this.name);
// this.clinicaService.NuevoPaciente
//     (
//       {
//         IdPaciente: 9,
//         DNI:this.dni,
//         CarnetExtrangeria:this.carextr,
//         FullName:this.fullname,
//         FechaNacimiento:new Date(+this.fechanacimiento).toISOString().substring(0,10),
//       }
//     )
  this.ruoter.navigate([
    'pago',
    this.dni,
    this.caresxt,
    this.fecha.getTime(),
    this.name,
    // datos.index
    // datos.tipo
  ]);
  }
}
