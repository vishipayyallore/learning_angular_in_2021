import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	selectedProducts = [];
	checkoutForm;

	constructor(private cartService: CartService, private formBuilder: FormBuilder) {
		this.checkoutForm = this.formBuilder.group({
			name: '',
			address: ''
		});
	}

	ngOnInit() {
		this.selectedProducts = this.cartService.getProductsFromCart();
	}

	onSubmit(customerData) {
		// Process Checkout Data here
		console.warn(`Your order has been submitted ${customerData}`);

		this.selectedProducts = this.cartService.clearSelectedProducts();
		this.checkoutForm.reset();
	}

}
