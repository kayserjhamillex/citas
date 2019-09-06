import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-reserva-paso7',
  templateUrl: './reserva-paso7.component.html',
  styleUrls: ['./reserva-paso7.component.css']
})
export class ReservaPaso7Component implements OnInit {
  espenumber:number;
  objeto;
  constructor(
    private route: ActivatedRoute,
    private clinicaService :ClinicaService,
  ) { }

  ngOnInit() {
    this.espenumber = this.route.snapshot.params['especialidad'];
//para poder sacar los datos de la especialidad
    let especialidades = this.clinicaService.ObtenerEspecialidad();
    console.log(especialidades);
    for (const unaespe of especialidades) {
    //  console.log(unaespe.IdEspecialidad);
    //  console.log(this.espenumber);
      if (unaespe.IdEspecialidad == this.espenumber) {
          // console.log(unaespe.IdEspecialidad);
          // console.log(this.espenumber);
        this.objeto = unaespe;
        console.log(unaespe);
        console.log(this.objeto);
        

      }
    }
  }
}
