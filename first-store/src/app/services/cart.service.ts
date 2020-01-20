import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Shipping } from '../interfaces/Shipping';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	selectedProducts = [];

	constructor(private httpClient: HttpClient) {
	}

	// TODO: Need to send the return value mentioning whether the Product was already exists OR added
	addProductToCart(product) {
		if (!this.selectedProducts.some(item => item.id === product.id)) {
			this.selectedProducts.push(product);
		}
	}

	getProductsFromCart() {
		return this.selectedProducts;
	}

	clearSelectedProducts() {
		this.selectedProducts = [];
		return this.getProductsFromCart();
	}

	getShippingPrices(): Observable<HttpResponse<Shipping[]>> {
		return this.httpClient.get<Shipping[]>('/assets/shipping.json', { observe: 'response' });
	}

	getShippingPricesV2() {
		return this.httpClient.get('/assets/shipping.json');
	}

}
