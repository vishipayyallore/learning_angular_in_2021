import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedProducts = [];

  constructor() { 

  }

  addProductToCart(product) {
    this.selectedProducts.push(product);
  }

  getProductsFromCart() {
    return this.selectedProducts;
  }

  clearSelectedProducts() {
    this.selectedProducts = [];
    return this.getProductsFromCart();
  }

}
