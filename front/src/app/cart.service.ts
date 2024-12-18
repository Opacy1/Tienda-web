import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type Product } from "./product-detail/product-item-detaill.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiURL = "http://localhost:8000/api/productos"

  constructor(private http: HttpClient) {}

  cartProducts: Product[] = [];


  addToCart(productSelecionado: Product) {
    this.cartProducts.push(productSelecionado);
  }

}
