import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductosServiceService } from '../productos-service.service';
import { errorContext } from 'rxjs/internal/util/errorContext';


@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  titleProduct: string = "Products";

  constructor(private api: ProductosServiceService){};

  listaProductos = []

  ngOnInit() :void{
    console.log("Entramos en productos");
    this.setProductos();
  }

  setProductos():void{
    this.api.getAllProductos().subscribe(
      {
        next: (data) => {
          this.listaProductos = data;
          console.log(this.listaProductos);
        },
        error: (error) => {
          console.error("Error fetching items: ", error);
        },
      }
    )
  }

}
