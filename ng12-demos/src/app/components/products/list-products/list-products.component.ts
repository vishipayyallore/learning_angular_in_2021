import { Component, OnDestroy, OnInit } from '@angular/core';

import { IProductDto } from '@products/interfaces/iproduct.dto';
import { ProductsService } from '@products/services/products.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sv-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit, OnDestroy {

    pageTitle = 'Product List';
    imageWidth = 40;
    imageMargin = 1;
    showImage = false;
    showSpinner = false;

    errorMessage: string = '';

    subscription!: Subscription;

    allProducts: IProductDto[] = [];
    products: IProductDto[] = [];

    private _listFilter = '';

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.products = this.performFilter(value);
    }

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.retrieveAllProducts();
    }

    ngOnDestroy(): void {
        console.log('Destroy !!');
        this.subscription.unsubscribe();
    }

    retrieveAllProducts() {
        this.showSpinner = true;
        this.subscription = this.productsService.getAllProducts()
            .subscribe({
                next: (data: IProductDto[]) => {
                    this.allProducts = this.products = data;
                },
                error: (err) => {
                    this.errorMessage = err;
                    this.showSpinner = false;
                },
                complete: () => {
                    this.showSpinner = false;
                }
            });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProductDto[] {

        return this.allProducts.filter((product: IProductDto) =>
            product
                .productName
                .toLocaleLowerCase()
                .includes(filterBy.toLocaleLowerCase()));
    }

    get hasProducts(): boolean {
        return this.products.length > 0;
    }

}
