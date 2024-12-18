import { Component, Input } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { type Products } from './product-item.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input({required: true}) product!: Products;
  

  viewDetails: string = "View Details";
  

}
