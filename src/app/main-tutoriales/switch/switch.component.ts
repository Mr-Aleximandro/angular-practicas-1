import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  dia:number = 5;
  day?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
