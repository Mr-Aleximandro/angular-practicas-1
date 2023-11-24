import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from "./main-tutoriales/contador/contador.component";
import { BotonComponent } from './main-tutoriales/boton/boton.component';
import { MascotaComponent } from './main-tutoriales/mascota/mascota.component';
import { FormularioComponent } from './main-tutoriales/formulario/formulario.component';
import { BuclesComponent } from './main-tutoriales/bucles/bucles.component';
import { SwitchComponent } from './main-tutoriales/switch/switch.component';
import { Formulario2Component } from './main-tutoriales/formulario2/formulario2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './main-tutoriales/formulario-reactivo/formulario-reactivo.component';
import { InputComponentComponent } from './main-tutoriales/input-component/input-component.component';
import { InputComponent2Component } from './main-tutoriales/input-component2/input-component2.component';
import { AddMessagesComponent } from './main-tutoriales/add-messages/add-messages.component';
import { ListMessagesComponent } from './main-tutoriales/list-messages/list-messages.component';
import { HomeComponent } from './main-home/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './info/about/about.component';
//LAS RUTAS AHORA SE ENCUENTRAN EN './app-routing.module.ts'
/* import { RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'cursos',
    component: CursosComponent,
    children: [
      {
        path: 'instructores',
        component: CursosInstructoresComponent  
      },
      {
        path: 'ofertas',
        component: CursosOfertasComponent  
      },
    ]
  },
  {
    path: 'cursos/:curso',
    component: CursoDetallesComponent
  },
  {
    path: 'cursos/:curso/:id',
    component: CursoDetallesComponent
  },
  {
    path: 'inputs',
    component: InputComponentComponent
  },
  {
    path: 'servicios',
    component: AddMessagesComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component:PageNotFoundComponent
  }
]; */

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonComponent,
    MascotaComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    FormularioReactivoComponent,
    InputComponentComponent,
    InputComponent2Component,
    AddMessagesComponent,
    ListMessagesComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(routes)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
