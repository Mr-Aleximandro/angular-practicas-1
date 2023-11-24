import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  txt: string='';
  showAlert: boolean = false;
  
  mostrar(txt:string){
    this.txt = txt;
    this.showAlert = true;
  }
}
