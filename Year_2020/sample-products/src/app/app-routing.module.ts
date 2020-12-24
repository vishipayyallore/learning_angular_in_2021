import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
	{ path: 'home', component: LandingPageComponent },
	{ path: 'products', component: ProductsListComponent },
	{ path: 'add-product', component: AddProductComponent },
	{ path: 'modify-product/:productId', component: ModifyProductComponent },
	{ path: 'delete-product/:productId', component: DeleteProductComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
