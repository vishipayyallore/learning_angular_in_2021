import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../services/cart.service';
import { Shipping } from '../interfaces/Shipping';

@Component({
	selector: 'app-shipping',
	templateUrl: './shipping.component.html',
	styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
	shippingCosts: Shipping[];
	shippingPrizes: Observable<Object>;

	constructor(private cartService: CartService) { }

	ngOnInit() {
		this.cartService.getShippingPrices().subscribe(data => {
			this.shippingCosts = data.body;
		});

		this.shippingPrizes = this.cartService.getShippingPricesV2();
	}

}
