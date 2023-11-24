import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalles',
  templateUrl: './curso-detalles.component.html',
  styleUrls: ['./curso-detalles.component.css']
})
export class CursoDetallesComponent {

  curso?: string;
  idCurso?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() { //Cuando se inicializa el componente este método siempre se ejecuta
    this.route.params.subscribe(params => {
      this.curso = params['curso']
      this.idCurso = params['id']
    });
  }

}
