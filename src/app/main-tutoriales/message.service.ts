import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message: string[] = ['1','2','3'];

  add(message: string){
    this.message.push(message);
  }
}
