import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent{

  constructor(private fb: FormBuilder){

  }

  //MANERA PARA ACCEDER INDIVIDUALMENTE AL INPUT 
  /* correo = new FormControl('117jald@gmail.com', [Validators.required, Validators.email]);
  nombre = new FormControl('', Validators.required); */

  //MANERA PARA ACCEDER A TODO EL FORMULARIO
  /* formulario = new FormGroup({
    'correo' : new FormControl('117jald@gmail.com', [Validators.required, Validators.email]),
    'nombre' : new FormControl('', Validators.required)
  }); */

  //MANERA PARA ACCEDER A TODO EL FORMULARIO (MAS EFICIENTE SI ES UN FORMULARIO GRANDE)
  formulario = this.fb.group({
    'correo': ['117jald@gmail.com', [Validators.required, Validators.email]],
    'nombre': ['', Validators.required]
  });

  get correo(){
    return this.formulario.get('correo') as FormControl;
  }
  get nombre(){
    return this.formulario.get('nombre') as FormControl;
  }

  procesar(){
    console.log(this.formulario.value);
  }
}
