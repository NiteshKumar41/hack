import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor( private http: HttpClient) { }

  getData(data)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const url="https://reqres.in/api/login";
    return this.http.post (url,data,httpOptions);

    
  }

  
}
