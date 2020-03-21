import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDto } from '../interfaces/ProductDto';
import { ProductsService } from '../services/products.service';

@Component({
    selector: 'app-modify-product',
    templateUrl: './modify-product.component.html',
    styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

    product: ProductDto;

    constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.productsService.GetProductById(parseInt(params.get('productId')))
                .subscribe((data: ProductDto) => {
                    this.product = data;
                });
        });
    }

}
