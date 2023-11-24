import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color: string = '';
  flagDisabled: boolean = false;
  src: string = 'https://images.pexels.com/photos/18920825/pexels-photo-18920825/free-photo-of-procesado-con-vsco-con-a1-preestablecido.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

}
