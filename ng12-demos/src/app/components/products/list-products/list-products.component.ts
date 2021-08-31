import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  pageTitle = 'Product List';
  errorMessage: string = '';

  listFilter = 'cart';
  
  constructor() { }

  ngOnInit(): void {
  }

}
