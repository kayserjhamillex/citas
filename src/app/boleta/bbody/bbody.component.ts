import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-bbody',
  templateUrl: './bbody.component.html',
  styleUrls: ['./bbody.component.css']
})
export class BbodyComponent implements OnInit {
  dni;
  carextr;
  fullname;
  fechanaci;
  actual;
  edad;
  especialidades:any[];
  doctores: any[];
  paciemtes: any[];
  horarios: any[];
  horas: any[];





  constructor(
    private route: ActivatedRoute,
    private clinicaService :ClinicaService,
    private ruoter: Router,
  ) { }

  ngOnInit() {
    this.dni = this.route.snapshot.params['dni'];
    this.carextr = this.route.snapshot.params['carextr'];
    this.fechanaci = this.route.snapshot.params['fecha'];
    this.fullname = this.route.snapshot.params['name'];
//la boleta nesececita los datos siguientes:
//nombre del doctor
//nombre de la especialidad
//nombre del cliente
//precio que se pago
//la hora de la consulta
//

    this.especialidades = this.clinicaService.ObtenerEspecialidad();
    this.doctores=this.clinicaService.ObtenerDoctor();
    this.horarios=this.clinicaService.ObtenerHorario();
    this.horas=this.clinicaService.ObtenerHora();
    







  }
}
