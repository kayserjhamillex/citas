import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-docbody',
  templateUrl: './docbody.component.html',
  styleUrls: ['./docbody.component.css']
})
export class DocbodyComponent implements OnInit {
  Doctor: any[];
  constructor(private clinicaService: ClinicaService,) { }

  ngOnInit() {
    this.Doctor=this.clinicaService.ObtenerDoctor();
  }

}
