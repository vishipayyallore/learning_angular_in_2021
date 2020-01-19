import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productslist } from '../products-list/productslist';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	product;

	constructor(private route: ActivatedRoute, private cartService: CartService) {
		this.route.paramMap.subscribe(params => {
			this.product = productslist[parseInt(params.get('productId'))];
		});
	}

	ngOnInit() {
	}

	addProductToCart(product) {
		this.cartService.addProductToCart(product);

		window.alert('Selected product has been added to the cart!');
	}

}
