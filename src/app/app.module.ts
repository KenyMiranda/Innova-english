import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';
import { HorariosComponent } from './horarios/horarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Aqui se definiran las rutas entre componentes 
const appRoutes:Routes=[
  {path:'', component: InicioComponent},
  {path:'Login', component: LoginComponent},
  {path:'Alumnos', component: AlumnosComponent},
  {path:'Maestros',component: MaestrosComponent},
  {path:'Registro',component: RegistroComponent},
  {path:'**',component:ErrorComponent}


]; 

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    MaestrosComponent,
    AlumnosComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    HorariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
