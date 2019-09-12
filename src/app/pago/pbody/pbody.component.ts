import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-pbody',
  templateUrl: './pbody.component.html',
  styleUrls: ['./pbody.component.css']
})
export class PbodyComponent implements OnInit {
dni;
carextr;
fechanaci;
fullname;
fechanacimiento;
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
    this.fechanacimiento = new Date(+this.fechanaci);
  }

insertar()
{
console.log(this.dni);
console.log(this.carextr);
console.log(this.fechanacimiento);
console.log(this.fullname);
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
  'boleta',
  this.dni,
  this.carextr,
  this.fechanacimiento.getTime(),
  this.fullname,
  // datos.index
  // datos.tipo
]);
}

  // 
}





