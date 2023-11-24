import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCursosRoutingModule } from './main-cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CursosInstructoresComponent } from './cursos-instructores/cursos-instructores.component';
import { CursosOfertasComponent } from './cursos-ofertas/cursos-ofertas.component';
import { CursoDetallesComponent } from './curso-detalles/curso-detalles.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosInstructoresComponent,
    CursosOfertasComponent,
    CursoDetallesComponent
  ],
  imports: [
    CommonModule,
    MainCursosRoutingModule
  ]
})
export class MainCursosModule { }
