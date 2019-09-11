import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from 'src/app/clinica.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sdbody',
  templateUrl: './sdbody.component.html',
  styleUrls: ['./sdbody.component.css']
})
export class SdbodyComponent implements OnInit {
  // [x: string]: any;
  espenumber:number;
  objeto;
  // doctoespe: [];
  doctordisponible: any[];
  activado = false;
  horariodisponible: any[];
  horariodisponible1: any[];
  horasaelegir: any[];
  obtenerdatos:FormGroup;
  numbermedico:number;
  constructor(
    private route: ActivatedRoute,
    private clinicaService :ClinicaService,
    private ruoter: Router,
    //añadiendo el costructor de formularios
    private datex: FormBuilder,
  ) { }

  ngOnInit() {
    this.espenumber = this.route.snapshot.params['especialidad'];
//para poder sacar los datos de la especialidad, doctores, horario
    let especialidades = this.clinicaService.ObtenerEspecialidad();
    let todosDoctores = this.clinicaService.ObtenerDoctor();
    let horas = this.clinicaService.ObtenerHora();
    let horario = this.clinicaService.ObtenerHorario();
//probadores de los datos
    // console.log(todosDoctores);
    // console.log(especialidades);
    // console.log(horas);
    // console.log(horario);
// construccion del form control de todos los datos
this.obtenerdatos=this.datex.group(
      {
        medico: [''],
        dia:[''],
      }
    );
    // this.eviardatos=this.formBuilder.group(
    //   {
    //     medico1:'',
    //     cita1:'',
    //     dia1:'',
    //   }
    // );
//para llamar los datos de la especialidad elegida anteriormente
// esto funciona par acuaquier especialidad que se elija
    for (const unaespe of especialidades) {
      if (unaespe.IdEspecialidad == this.espenumber) {
        this.objeto = unaespe;
        //probador jeje
        // console.log(unaespe);
        // console.log(this.objeto);
      }
    }
//para poder obtener los doctores segun las especialidad que se eligio
    let docotespecialidad = [];
    for (const doctor of todosDoctores)
    {
      //prueba de que llama a todos los doctores
      // console.log(doctor);
      //-----------------------------------------
      //prueba que esta bucleando los id para la respectiva comparacion
      // console.log(this.objeto.IdEspecialidad);
      // console.log(doctor.IdEspecialidad);
      //-----------------------------------
      //empecemos con la comparacion
      if (doctor.IdEspecialidad == this.objeto.IdEspecialidad) 
      {
        //prueba de que entran datos
        // console.log("entrando datos");
        //----------------------------------
        //meter datos a un array
        docotespecialidad.push(doctor);
        //-----------------------------------
        //probar si estan entrando los datos
        // console.log(docotespecialidad);
        //-----------------------------------
      }
    }
    //probando esto jejj :v
    this.doctordisponible = docotespecialidad;
    // console.log(this.doctordisponible);
 // completarcita() {
  //   this.router.navigate([
  //     'validacioncliente',
      // 'paso3',
      // medico.IdDoctor,
      // this.fechaCita.getTime()
  //   ])
  // }
  // this.BuscarHoraDisponible(datos);
}
prueba(prueba)
{
  // console.log('obtenerdatos', this.obtenerdatos.value);
  console.log(prueba.dia);
  console.log(prueba.medico);
  typeof(prueba.medico);
  
}
// BuscarHoraDisponible(datos)
// //para poder jalar los datos de l formgroup
// // BuscarHoraDisponible(datos)
//   {
//     let reserva = this.clinicaService.ObtenerCita();
//     let horasdisponibles = [];
//     let horasnodisponibles = [];
//     this.numbermedico = this.obtenerdatos.get('medico').value;
//     // obtener los datos de la fecha y el id del doctor
//     const reservacita = new Date(datos.dia);
//     const numerofecha = reservacita.getTime();
//     console.log(numerofecha);
//     console.log(this.numbermedico);
    
//     // let doctoencargado = 
//     // let doctoencargado = datos.medico;
//     // let doctoencargado = new Number(datos.medico);
//     // console.log(doctoencargado);
//     for (const nodisponible of reserva){
//     //   if (nodisponible.FechaCita == reservacita
//     //     && nodisponible.IdDoctor == doctoencargado
//     //     ) {
//     //     this.horasnodisponibles.push(nodisponible.IdCita);
//     //   }
//     }
//     let horario = this.clinicaService.ObtenerHorario();
//     for (const disponible of horario){
//     //   const o = horasnodisponibles.filter(n => n == disponible.IdHorario).length;
//     //   if (o === 0 && disponible.IdHorario == this.reserva) {
//     //     horasdisponibles.push(disponible);
//     //   }
//     }
//     // this.horariodisponible = horasdisponibles;
//     //ya que sacamos el id del horario correspondiente libre
//     //toca poder visualizar las horas disponibles a reservar 
//     // :)
//     // let horarioredisponible = [];
//     // for (const loshorarios of horario)
//     // {
//     //   if (loshorarios.IdHorario == horariodisponible.IdHorario) {
//     //     horarioredisponible.push(loshorarios);
//     //   }
//     // }
//     // this.horariodisponible1= horarioredisponible;
//     // let horadisponible = [];
//     // let horas = this.clinicaService.ObtenerHora();
//     // for (const lashoras of horas)
//     // {
//     //   if (lashoras.Id == horariodisponible1.IdHora) {
//     //     horadisponible.push(lashoras);
//     //   }
//     // }
//     // this.horasaelegir=horarioredisponible;
//   }
//para poder completar la reserva se toman los valores respectivos para la reserva
  // completarcita(identificadores) {
    // const fechadecita = new Date(identificadores.dia1);
  //   this.router.navigate([
  //     'validacioncliente',
      // identificadores.medico1,
      // identificadores.cita1,
      // this.fechadecita.getTime(),
  //   ])
  // }



}
