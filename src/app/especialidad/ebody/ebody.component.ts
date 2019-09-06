import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../../clinica.service';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ebody',
  templateUrl: './ebody.component.html',
  styleUrls: ['./ebody.component.css']
})
export class EbodyComponent implements OnInit {
  especialidad: any[];
  // Doctor: any[];
  // reservaForm: FormGroup;
  // activar=false;
  constructor(
    private clinicaService: ClinicaService,
    //importacion de formulario angular
    // private formBuilder: FormBuilder,
    //importacion para ruteo
    private ruoter: Router,
  ) { }

  ngOnInit() {
    this.especialidad=this.clinicaService.ObtenerEspecialidad();
  }
  // test(index){
  //   console.log(index+1);
  //   const a=index+1;
  //   console.log(a);
  // }
  // buscarDoctorDisponible(datos) {
  //   console.log(datos);
  //   const fecha = new Date(datos.dia);
  //   let indi = +datos.elIndice + 1;
  //   // let a=index+1;
  //   this.ruoter.navigate([
  //     'reserva',
  //     'paso2',
  //     fecha.getTime(),
  //     indi
  //   ]);
  // }
//pasar valor de tan solo el id de la especialidad

  // PaginaEspecialidad(datos) {
  //   console.log(datos);
  //   let indi = +datos.elIndice + 1;
  //   this.ruoter.navigate([
  //     'reserva',
  //     'paso2',
  //     indi
  //   ]);
  // }
  checkout(Especialidad: any){
    this.ruoter.navigate([
      'elegirfechayhora',
      Especialidad.IdEspecialidad
    ])
  }
  // checkout(medico: any) {
  //   this.router.navigate([
  //     'reserva',
  //     'paso3',
  //     medico.IdDoctor,
  //     this.fechaCita.getTime()
  //   ])
  // }




}
