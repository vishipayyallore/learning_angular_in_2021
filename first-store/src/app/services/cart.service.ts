import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Shipping } from '../interfaces/Shipping';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	selectedProducts: any[] = [];

	constructor(private httpClient: HttpClient) {
	}

	// TODO: Need to send the return value mentioning whether the Product was already exists OR added
	addProductToCart(product): boolean {
		var results = false;

		if (!this.selectedProducts.some(item => item.id === product.id)) {
			this.selectedProducts.push(product);
			results = true;
		}

		return results;
	}

	getProductsFromCart(): any[] {
		return this.selectedProducts;
	}

	clearSelectedProducts(): any[] {
		this.selectedProducts = [];
		return this.getProductsFromCart();
	}

	getShippingPrices(): Observable<HttpResponse<Shipping[]>> {
		return this.httpClient.get<Shipping[]>('/assets/shipping.json', { observe: 'response' });
	}

	getShippingPricesV2(): Observable<Object> {
		return this.httpClient.get('/assets/shipping.json');
	}

}
