import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

    productName: string;
    products: string[] = ['Product 1', 'Product 2'];
    isDisabled: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    onAddProduct(): void{
        this.products.push(this.productName);
    }

}
