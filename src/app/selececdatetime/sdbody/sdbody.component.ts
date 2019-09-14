import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { ClinicaService } from 'src/app/clinica.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sdbody',
  templateUrl: './sdbody.component.html',
  styleUrls: ['./sdbody.component.css']
})
export class SdbodyComponent implements OnInit {
  // [x: string]: any;
  // [x: string]: any;
  espenumber: number;
  objeto;
  objetohoralibre;
  // doctoespe: [];
  doctordisponible: any[];
  activado = false;
  horarionodisponible: any[];
  identifica: any[];
  horariodisponible: any[];
  horasaelegir: any[];
  obtenerdatos: FormGroup;
  numbermedico: number;
  reserva: any[];

  // CAMBIO DE MAX
  arrayDeMax: any[] = [];
  libres: any[];
  horalibre;
  // resultados: any[];
  pinshishorario: any[];
  // fechareservada:Date;

  fechadecita;
  identidaddoctor;
  identidadhora;

  constructor(
    private route: ActivatedRoute,
    private clinicaService: ClinicaService,
    private ruoter: Router,
    // añadiendo el costructor de formularios
    private datex: FormBuilder,
  ) {}

  ngOnInit() {
    this.espenumber = this.route.snapshot.params.especialidad;
    // para poder sacar los datos de la especialidad, doctores, horario
    const especialidades = this.clinicaService.ObtenerEspecialidad();
    const todosDoctores = this.clinicaService.ObtenerDoctor();
    // const horas = this.clinicaService.ObtenerHora();
    // const horario = this.clinicaService.ObtenerHorario();
    // probadores de los datos
    // console.log(todosDoctores);
    // console.log(especialidades);
    // console.log(horas);
    // console.log(horario);
    // construccion del form control de todos los datos
    this.obtenerdatos = this.datex.group({
      medico: [''],
      dia: ['']
    });
    // this.eviardatos=this.formBuilder.group(
    //   {
    //     medico1:'',
    //     cita1:'',
    //     dia1:'',
    //   }
    // );
    // para llamar los datos de la especialidad elegida anteriormente
    // esto funciona par acuaquier especialidad que se elija
    for (const unaespe of especialidades) {
      if (unaespe.IdEspecialidad == this.espenumber) {
        this.objeto = unaespe;
        // probador jeje
        // console.log(unaespe);
        // console.log(this.objeto);
      }
    }
    // para poder obtener los doctores segun las especialidad que se eligio
    const docotespecialidad = [];
    for (const doctor of todosDoctores) {
      // prueba de que llama a todos los doctores
      // console.log(doctor);
      // -----------------------------------------
      // prueba que esta bucleando los id para la respectiva comparacion
      // console.log(this.objeto.IdEspecialidad);
      // console.log(doctor.IdEspecialidad);
      // -----------------------------------
      // empecemos con la comparacion
      if (doctor.IdEspecialidad == this.objeto.IdEspecialidad) {
        // prueba de que entran datos
        // console.log("entrando datos");
        // ----------------------------------
        // meter datos a un array
        docotespecialidad.push(doctor);
        // -----------------------------------
        // probar si estan entrando los datos
        // console.log(docotespecialidad);
        // -----------------------------------
      }
    }
    // probando esto jejj :v
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
  // prueba(prueba,docto)
  // {
  //   // console.log('obtenerdatos', this.obtenerdatos.value);
  //   console.log(prueba.dia);
  //   console.log(docto.IdDoctor);
  //   // typeof(prueba.medico);

  // }
  // BuscarHoraDisponible(datos)
  // //para poder jalar los datos de l formgroup
  prueba(fecha, docto) 
  {
    this.activado=true;
    this.reserva = this.clinicaService.ObtenerCita();
    const horasdisponibles = [];
    const horasnodisponibles = [];
    const pinshidoctor = docto.IdDoctor;
    // obtener los datos de la fecha y el id del doctor
    //   reservacita es la fecha elegida
    const reservacita = new Date(fecha.dia);
    const numerofecha = reservacita.getTime();
    // console.log(pinshidoctor);
    // console.log(reservacita);
    // console.log(numerofecha);
    const identificador = [];
    for (const nodisponible of this.reserva) {
      // para recorrer los id de la reserva
      const idmedico = nodisponible.IdDoctor;
      // para recorrer las fechas reservadas :V
      const fechareservada = new Date(nodisponible.FechaCita);
      // alv coparando las pinshis fechas y los id de doctor jeje :v
      if (
        fechareservada.getTime() == reservacita.getTime() &&
        idmedico == pinshidoctor
      ) {
        horasnodisponibles.push(nodisponible);
        identificador.push(nodisponible.IdHorario);
      }
    }
    this.horarionodisponible = horasnodisponibles;
    this.identifica = identificador;
    // probar si se almacenan las citas que coinciden con los parametros datos
    // console.log(this.horarionodisponible);
    // console.log(this.identifica);
    const especialidadelegida = this.espenumber;
    const horario = this.clinicaService.ObtenerHorario();
    for (const disponible of horario) {
      const a = disponible.IdEspecialidad;
      const b = this.espenumber;
      // const d = disponible.IdHorario;
      if (a == b) {
        horasdisponibles.push(disponible);
        // console.log('hellouda');
      }
    }
    this.horariodisponible = horasdisponibles;
    // console.log(this.horariodisponible);
    const coinciden = [];
    const nocoinciden = [];
    for (const iterator of this.horariodisponible) {
      // const hellouda = this.identifica.keys();
      const hellouda = Object.keys(this.identifica);
      // console.log(hellouda);
      const recorrido = iterator.IdHorario;
      // console.log(recorrido);
      if (recorrido == hellouda) {
        // console.log('alv jeje');
        coinciden.push(iterator);
      } else {
        nocoinciden.push(iterator);
      }
    }
    //  for (const iterator of this.horariodisponible) {
    //   for (const filtro of this.identifica)
    //   {
    //     const hellouda = filtro;
    //     console.log(hellouda);
    //     const recorrido = iterator.IdHorario;
    //     console.log(recorrido);
    //     if (hellouda != recorrido) {
    //       console.log("alv jeje");
    //       resultados.push(filtro);
    //     }
    //   }
    //  }
    // console.log(coinciden);

    // console.log(nocoinciden);

    // console.log(this.horarionodisponible);

    for (const horNoDispo of this.horarionodisponible) 
    {
      for (const incoincidente in nocoinciden) 
      {
        if (horNoDispo.IdHorario === nocoinciden[incoincidente].IdHorario) 
        {
          nocoinciden.splice(+incoincidente, 1);
        }
      }
    }
    this.libres=nocoinciden;
    // console.log(nocoinciden);
    console.log(this.libres);
    // this.horas = this.clinicaService.ObtenerHora();
    // console.log(this.horas);
    // for (const prueba of this.libres) {
    //   const dato1 = prueba.IdHora;
    //   // console.log(dato1);
    //   for (const prueba1 of this.horas) {
    //     const dato2 = prueba1.Id;
    //     // console.log(dato2);
    //     if (dato1 == dato2) {
    //       console.log("hellouda");
    //       this.horalibre = prueba1;
    //     }
    //   }
    //   console.log(this.horalibre);
    //   console.log(this.horalibre.name);
      
    //   // console.log(prueba);
    // }
    // const prueba1 = this.clinicaService.ObtenerEspecialidad();
    // for (const unaespe of prueba1) {
    //   if (unaespe.IdEspecialidad == this.espenumber) {
    //     this.objeto = unaespe;
    //   }
    // }
    // for (const unhora of listahoras) 
    // {
    //   const var1 = unhora.Id;
    //   console.log(var1);
    //   for (const prueba of this.libres) 
    //   {
    //     const var2 = prueba.IdHora;
    //     console.log(var2);
    //     // if (unhora.Id == prueba.IdHora) {
    //     //   this.horalibre = unhora.name;
    //     //   console.log(this.horalibre);
          
    //     //   // probador jeje
    //     //   // console.log(unaespe);
    //     //   // console.log(this.objeto);
    //     // }
    //   }  
    // }
  }

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



  // para poder completar la reserva se toman los valores respectivos para la reserva
  completarcita(docto, fecha, hora) 
  {
    this.fechadecita = new Date(fecha.dia);
    this.identidaddoctor = docto.IdDoctor;
    this.identidadhora = hora.IdHorario;
    // console.log(this.fechadecita);
    // console.log(this.identidaddoctor);
    // console.log(this.identidadhora);
    this.ruoter.navigate([
      'validpacient',
      docto.IdDoctor,
      this.fechadecita.getTime(),
      hora.IdHorario,
    ]);
  }
}
