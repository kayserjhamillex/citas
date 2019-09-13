import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
// import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
// import { SelecespecialidadComponent } from './selecespecialidad/selecespecialidad.component';
import { SelececdatetimeComponent } from './selececdatetime/selececdatetime.component';
import { PagoComponent } from './pago/pago.component';
import { BoletaComponent } from './boleta/boleta.component';
import { ReservaPaso1Component } from './reserva-paso1/reserva-paso1.component';
import { ReservaPaso2Component } from './reserva-paso2/reserva-paso2.component';
import { ReservaPaso3Component } from './reserva-paso3/reserva-paso3.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ReservaPaso5Component } from './reserva-paso5/reserva-paso5.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { ReservaPaso7Component } from './reserva-paso7/reserva-paso7.component';
import { ReservaPaso6Component } from './reserva-paso6/reserva-paso6.component';
import { ValidarusuarioComponent } from './validarusuario/validarusuario.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'iniciado', component: PerfilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'especilidad', component: EspecialidadComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'doctores', component: DoctoresComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'reserva', component: EspecialidadComponent},
  { path: 'elegirfechayhora/:especialidad', component: SelececdatetimeComponent},
  { path: 'pago/:dni/:carextr/:fecha/:name/:iddoctor/:fecha/:idhorario', component: PagoComponent},
  // { path: 'pago', component: PagoComponent},
  // { path: 'boleta', component: BoletaComponent},
  { path: 'boleta/:dni/:carextr/:fecha/:name/:iddoctor/:fecha/:idhorario', component: BoletaComponent},
  { path: 'reserva/paso1', component: ReservaPaso1Component},
  { path: 'reserva/paso2/:fecha/:tipoId', component: ReservaPaso2Component},
  { path: 'reserva/paso3/:espe/:fecha', component: ReservaPaso3Component},
  { path: 'datoscliente', component: ReservaPaso5Component},
  { path: 'prueba', component: ReservaPaso6Component},
  { path: 'probando/:especialidad', component: ReservaPaso7Component},
  { path: 'validpacient/:iddoctor/:fecha/:idhorario', component: ValidarusuarioComponent},

  //implementado guard
// { path: 'usuario', component: UsuarioComponent,canActivate:[AuthGuardService]},  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
