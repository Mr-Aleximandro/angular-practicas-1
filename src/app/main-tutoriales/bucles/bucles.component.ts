import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascota/mascota';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  mascotas: Mascota[] = [
    {nombre: 'Princesa', edad: 6, color: 'Café', raza: 'Bonita', sexo: true},
    {nombre: 'Osita', edad: 3, color: 'Blanco', raza: 'Bonita', sexo: true},
    {nombre: 'Porgui 1ro', edad: 1.5, color: 'Café', raza: 'Bonito', sexo: false},
    {nombre: 'Porgui 2do', edad: .8, color: 'Negro', raza: 'Bonito', sexo: false},
    {nombre: 'Porgui 3ro', edad: 2, color: 'Café', raza: 'Feo', sexo: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
