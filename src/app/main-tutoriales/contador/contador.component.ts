import { Component, OnInit } from "@angular/core";
import { Persona } from "../persona";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {

    }

    puesto: string = "Ingeniero en Sistemas Computacionales";
    persona: Persona = {
        nombre: 'Alejandro López',
        edad: 24
    }
    contador = 0;

    sumar(){
        this.contador++;
    }
    restar(){
        this.contador--;
    }
}