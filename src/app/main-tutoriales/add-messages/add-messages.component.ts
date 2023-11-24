import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent implements OnInit {

  mensaje: string = '';

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  addMessage(){
    this.messageService.add(this.mensaje);
  }


}
