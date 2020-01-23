import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Shipping } from '../interfaces/Shipping';
import { ProductDto } from '../interfaces/ProductDto';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	selectedProducts: ProductDto[] = [];

	constructor(private httpClient: HttpClient) {
	}

	addProductToCart(product: ProductDto): boolean {
		var results = false;

		if (!this.selectedProducts.some(item => item.id === product.id)) {
			this.selectedProducts.push(product);
			results = true;
		}

		return results;
	}

	getProductsFromCart(): ProductDto[] {
		return this.selectedProducts;
	}

	clearSelectedProducts(): ProductDto[] {
		this.selectedProducts = [];
		return this.getProductsFromCart();
	}

	getShippingPrices(): Observable<HttpResponse<Shipping[]>> {
		return this.httpClient.get<Shipping[]>('/assets/shipping.json', { observe: 'response' });
	}

	getShippingPricesV2(): Observable<Shipping[]> {
		return this.httpClient.get<Shipping[]>('/assets/shipping.json', { observe: 'body' });
	}

}
