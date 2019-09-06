import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicaService } from 'src/app/clinica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sdbody',
  templateUrl: './sdbody.component.html',
  styleUrls: ['./sdbody.component.css']
})
export class SdbodyComponent implements OnInit {
  [x: string]: any;
  espenumber:number;
  objeto;
  constructor(
    private route: ActivatedRoute,
    private clinicaService :ClinicaService,
    private ruoter: Router,
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
  // completarcita() {
  //   this.router.navigate([
  //     'validacioncliente',
      // 'paso3',
      // medico.IdDoctor,
      // this.fechaCita.getTime()
  //   ])
  // }




}
