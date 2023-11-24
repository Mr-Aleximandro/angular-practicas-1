import { Component, OnInit } from '@angular/core';
import { Mascota } from './mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mascota: Mascota = {
    nombre: 'Pogui',
    raza: "Malish XD",
    color: "Café",
    sexo: false,
    edad: 1.3
  }

}
