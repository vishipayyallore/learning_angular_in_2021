import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { productslist } from '../products-list/productslist';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	product;

	constructor(private route: ActivatedRoute) {
		this.route.paramMap.subscribe(params => {
			this.product = productslist[parseInt(params.get('productId'))];
		});
	}

	ngOnInit() {
	}

}
