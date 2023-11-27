import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    RouterLinkActive
  ]
})
export class SharedModule { }
