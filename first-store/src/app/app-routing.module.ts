import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
	{ path: 'home', component: ProductsListComponent },
	{ path: 'product/:productId', component: ProductDetailsComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'shipping', component: ShippingComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: ProductsListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
