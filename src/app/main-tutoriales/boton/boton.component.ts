import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  url?: string;
  url1?: string;
  url2?: string;
  color: string = '';
  flagDisabled: boolean = false;

  ngOnInit(): void {
    const imageData$ = this.getImage();

    imageData$.subscribe(url => {
      this.url1 = url;
      this.url = url;
    });

    imageData$.subscribe(url => {
      this.url2 = url;
    });
  }

  getImage(): Observable<string> {
    return this.httpService.getData().pipe(
      map(result => result.image)
    );
  }
  

  

  
}
