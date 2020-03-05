import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { ProductDto } from '../interfaces/ProductDto';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

	productsList: ProductDto[] = [];

	constructor(private productsService: ProductsService) { }

	ngOnInit(): void {
		this.loadProducts();
	}

	loadProducts() {
		this.productsService.GetProducts()
			.subscribe((data: ProductDto[]) => {
				this.productsList = data;
		  });
	}

}
