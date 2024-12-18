import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductosServiceService {

  private apiURL = "http://localhost:8000/api/productos"

  constructor(private http: HttpClient) {}

  getAllProductos(): Observable<any>{
    return this.http.get(this.apiURL);
  }

  getOneProducto(id: number): Observable<any>{
    return this.http.get(`${this.apiURL}/${id}`);
  }

}
