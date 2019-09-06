import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../clinica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-paso6',
  templateUrl: './reserva-paso6.component.html',
  styleUrls: ['./reserva-paso6.component.css']
})
export class ReservaPaso6Component implements OnInit {
  especialidad: any[];
  constructor(
    private clinicaService: ClinicaService,
    private ruoter: Router,
    
    
    ) { }

  ngOnInit() {
    this.especialidad=this.clinicaService.ObtenerEspecialidad();
  }
  // probando
  
  checkout(identificador: any){
    this.ruoter.navigate([
      'elegirfechayhora',
      identificador.IdEspecialidad
    ])
  }


}
