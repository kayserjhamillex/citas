import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-servbody',
  templateUrl: './servbody.component.html',
  styleUrls: ['./servbody.component.css']
})
export class ServbodyComponent implements OnInit {
  servicios: any[];
  constructor(
    private clinicaService: ClinicaService,
  ) { }

  ngOnInit() {
    this.servicios=this.clinicaService.ObtenerServicio();
  }

}
