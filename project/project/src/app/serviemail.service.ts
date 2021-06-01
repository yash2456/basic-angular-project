import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiemailService {
  url = "http://localhost:3000"

  constructor(private http: HttpClient) { }


  sendEail(data: any) {
    return this.http.post(`${this.url}/ok`, data)
  }
}
