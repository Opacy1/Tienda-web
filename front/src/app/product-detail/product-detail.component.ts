import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from '../productos-service.service';
import { type Product } from "./product-item-detaill.model";
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  isInfoLoaded: Boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private api: ProductosServiceService,
    private apiCart: CartService
  ){}
  

  ngOnInit(): void{
    const idParametro = this.route.snapshot.paramMap.get("id");
    if(idParametro){
      const productId = +idParametro;
      this.setProducto(productId);
    }
  }

  setProducto(id: number): void{
    this.api.getOneProducto(id).subscribe(
      {
        next: (producto: Product) => {
          console.log("producto obtenido: ", producto)
          this.product = producto;

        

          this.isInfoLoaded = true;
        },
        error: (error) => {
          console.error("Error fetching items: ", error);
        },
      }
    )
  }

  onProductSelect(){
    this.apiCart.addToCart(this.product);
   
  }

}
