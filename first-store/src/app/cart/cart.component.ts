import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../services/cart.service';
import { ProductDto } from '../interfaces/ProductDto';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	selectedProducts: ProductDto[] = [];
	checkoutForm: FormGroup;

	constructor(private cartService: CartService, private formBuilder: FormBuilder) {
		this.checkoutForm = this.formBuilder.group({
			name: '',
			address: ''
		});
	}

	ngOnInit() {
		this.selectedProducts = this.cartService.getProductsFromCart();
	}

	onSubmit(customerData): void {
		// Process Checkout Data here
		console.warn(`Your order has been submitted ${customerData}`);

		this.selectedProducts = this.cartService.clearSelectedProducts();
		this.checkoutForm.reset();
	}

}
