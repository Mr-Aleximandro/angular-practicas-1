import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-component2',
  templateUrl: './input-component2.component.html',
  styleUrls: ['./input-component2.component.css']
})
export class InputComponent2Component {

  @Input() title?: string;
  color:string = '';
  
  @Output() titleChange = new EventEmitter<string>();
  @Output() colorChange = new EventEmitter<string>();
  
  emitTitleChange(){
    this.titleChange.emit(this.title);
  }
  cambiarColor(newColor:string){
    this.color = 'bg-'+newColor;
    this.colorChange.emit(this.color);
  }
}
