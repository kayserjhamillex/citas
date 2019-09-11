import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../clinica.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { addListener } from 'cluster';

@Component({
  selector: 'app-reserva-paso1',
  templateUrl: './reserva-paso1.component.html',
  styleUrls: ['./reserva-paso1.component.css']
})
export class ReservaPaso1Component implements OnInit {
  Especialidad: any[];
  Doctor: any[];
  reservaForm: FormGroup;
  activar=false;
  
  constructor(
    private clinicaService: ClinicaService,
    //importacion de formulario angular
    private datex: FormBuilder,
    //importacion para ruteo
    private ruoter: Router,
    ) { }

  ngOnInit() {
    this.Especialidad=this.clinicaService.ObtenerEspecialidad();
    this.Doctor=this.clinicaService.ObtenerDoctor();
    //creacion del 
    this.reservaForm=this.datex.group(
      {
        elIndice:'',
        dia:''
      }
    );
  }

  test(index){
    console.log(index+1);
    const a=index+1;
    console.log(a);
  }

  buscarDoctorDisponible(datos) {
    console.log(datos);
    const fecha = new Date(datos.dia);
    let indi = +datos.elIndice + 1;
    // let a=index+1;
    this.ruoter.navigate([
      'reserva',
      'paso2',
      fecha.getTime(),
      indi
      // datos.index
      // datos.tipo
    ]);
  }
}
