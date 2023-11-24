import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CursosInstructoresComponent } from './cursos-instructores/cursos-instructores.component';
import { CursosOfertasComponent } from './cursos-ofertas/cursos-ofertas.component';
import { CursoDetallesComponent } from './curso-detalles/curso-detalles.component';

const routes: Routes = [
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
    //Este path permite la visualización del componente con una sola variable
    path: 'cursos/:curso',
    component: CursoDetallesComponent
  },
  {
    //Este path permite la visualización del componente solo con 2 variables
    path: 'cursos/:curso/:id',
    component: CursoDetallesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainCursosRoutingModule { }
