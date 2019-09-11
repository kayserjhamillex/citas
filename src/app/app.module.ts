import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//para login}
import {  SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider,FacebookLoginProvider } from "angularx-social-login";
//angular material
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
//lo demas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { IheaderComponent } from './inicio/iheader/iheader.component';
import { IbodyComponent } from './inicio/ibody/ibody.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EbodyComponent } from './especialidad/ebody/ebody.component';
import { EheaderComponent } from './especialidad/eheader/eheader.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NheaderComponent } from './nosotros/nheader/nheader.component';
import { NbodyComponent } from './nosotros/nbody/nbody.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CheaderComponent } from './contactanos/cheader/cheader.component';
import { CbodyComponent } from './contactanos/cbody/cbody.component';
import { LheaderComponent } from './login/lheader/lheader.component';
import { LbodyComponent } from './login/lbody/lbody.component';
import { SelecespecialidadComponent } from './selecespecialidad/selecespecialidad.component';
import { SeheaderComponent } from './selecespecialidad/seheader/seheader.component';
import { SebodyComponent } from './selecespecialidad/sebody/sebody.component';
import { SelececdatetimeComponent } from './selececdatetime/selececdatetime.component';
import { SdheaderComponent } from './selececdatetime/sdheader/sdheader.component';
import { SdbodyComponent } from './selececdatetime/sdbody/sdbody.component';
import { PagoComponent } from './pago/pago.component';
import { PheaderComponent } from './pago/pheader/pheader.component';
import { PbodyComponent } from './pago/pbody/pbody.component';
import { BoletaComponent } from './boleta/boleta.component';
import { BheaderComponent } from './boleta/bheader/bheader.component';
import { BbodyComponent } from './boleta/bbody/bbody.component';
import { ReservaPaso1Component } from './reserva-paso1/reserva-paso1.component';
import { ReservaPaso2Component } from './reserva-paso2/reserva-paso2.component';
import { ReservaPaso3Component } from './reserva-paso3/reserva-paso3.component';
import { HeaderReservaComponent } from './header-reserva/header-reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaPaso4Component } from './reserva-paso4/reserva-paso4.component';
import { ReservaPaso5Component } from './reserva-paso5/reserva-paso5.component';
import { ReservaPaso6Component } from './reserva-paso6/reserva-paso6.component';
import { ReservaPaso7Component } from './reserva-paso7/reserva-paso7.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServbodyComponent } from './servicios/servbody/servbody.component';
import { ServheaderComponent } from './servicios/servheader/servheader.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { DocbodyComponent } from './doctores/docbody/docbody.component';
import { DocheaderComponent } from './doctores/docheader/docheader.component';
import { ValidarusuarioComponent } from './validarusuario/validarusuario.component';
import { ValidbodyComponent } from './validarusuario/validbody/validbody.component';
import { ValidheaderComponent } from './validarusuario/validheader/validheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthGuardService } from './services/auth-guard.service';


const config = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider("761309882279-9gdpl7teu3pm55h217hhnpc50bvspahe.apps.googleusercontent.com")
  // }
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider("126510371816-548i3tga1oull84k9jn0eod5bfsjhm09.apps.googleusercontent.com")
  // },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("126510371816-548i3tga1oull84k9jn0eod5bfsjhm09.apps.googleusercontent.com")
  },
  //inicio secion local
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("630989510742058")
  }  
  //para iniciar sesion en el hosting	
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider("2156200141339667")
  // }  	
]);
 export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    // AuthGuardService,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PerfilComponent,
    UsuarioComponent,
    InicioComponent,
    IheaderComponent,
    IbodyComponent,
    EspecialidadComponent,
    EbodyComponent,
    EheaderComponent,
    NosotrosComponent,
    NheaderComponent,
    NbodyComponent,
    ContactanosComponent,
    CheaderComponent,
    CbodyComponent,
    LheaderComponent,
    LbodyComponent,
    SelecespecialidadComponent,
    SeheaderComponent,
    SebodyComponent,
    SelececdatetimeComponent,
    SdheaderComponent,
    SdbodyComponent,
    PagoComponent,
    PheaderComponent,
    PbodyComponent,
    BoletaComponent,
    BheaderComponent,
    BbodyComponent,
    ReservaPaso1Component,
    ReservaPaso2Component,
    ReservaPaso3Component,
    HeaderReservaComponent,
    ReservaPaso4Component,
    ReservaPaso5Component,
    ReservaPaso6Component,
    ReservaPaso7Component,
    ServiciosComponent,
    ServbodyComponent,
    ServheaderComponent,
    DoctoresComponent,
    DocbodyComponent,
    DocheaderComponent,
    ValidarusuarioComponent,
    ValidbodyComponent,
    ValidheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     SocialLoginModule,
     FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatMenuModule,
     MatSidenavModule,
     MatToolbarModule,
     MatCardModule,
     MatDividerModule,
     MatExpansionModule,
     MatGridListModule,
     MatListModule,
     MatStepperModule,
     MatTabsModule,
     MatTreeModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatBadgeModule,
     MatChipsModule,
     MatIconModule,
     MatProgressSpinnerModule,
     MatProgressBarModule,
     MatRippleModule,
     MatBottomSheetModule,
     MatDialogModule,
     MatSnackBarModule,
     MatTooltipModule,
     MatPaginatorModule,
     MatSortModule,
     MatTableModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
