import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { type Product } from './product-card.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  isInfoLoaded: Boolean = false;

  cart!: Product[];

  
  constructor(
    private api: CartService
  ){}


  ngOnInit(): void{
    this.setCart(this.api.cartProducts);
  }

  setCart(productosCarrito: Product[]){

    this.cart = productosCarrito;
   
    this.isInfoLoaded = true;
    console.log(this.api.cartProducts);

  }

  deleteCartProduct(id: number){

    const index = this.cart.findIndex((product) => product.id === id)

    if(index !== -1){
      this.cart.splice(index, 1);
      
    } else {
      console.log("producto no encontrado");
    }

  }

}
