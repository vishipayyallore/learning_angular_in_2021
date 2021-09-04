import { Component, OnInit } from '@angular/core';

import { IProductDto } from '@products/interfaces/iproduct.dto';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'sv-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 40;
  imageMargin = 1;
  showImage = false;
  errorMessage: string = '';
  listFilter = 'cart';
  products: IProductDto[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.retrieveAllProducts();
  }

  retrieveAllProducts() {

    this.productsService.getAllProducts()
      .subscribe((data: IProductDto[]) => {
        this.products = data;
        console.log(this.products);
      });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
