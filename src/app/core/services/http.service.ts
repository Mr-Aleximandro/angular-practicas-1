import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface ApiResponse {
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://randomfox.ca/floof/';

  constructor(private http: HttpClient) {}

  getData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}`);
  }
}
