import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-home/home/home.component';
import { InputComponentComponent } from './main-tutoriales/input-component/input-component.component';
import { AddMessagesComponent } from './main-tutoriales/add-messages/add-messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainCursosModule } from './main-cursos/main-cursos.module';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
  },
  {
    path: 'inicio',
    component: HomeComponent
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
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    MainCursosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
