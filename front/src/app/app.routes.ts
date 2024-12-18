import { Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: "", component: ProductListComponent},
    {path: "contact", component: ContactComponent},
    {path: "cart", component: CartComponent},
    {path: "product/:id", component: ProductDetailComponent},
    {path: "**", redirectTo: ""}
];
