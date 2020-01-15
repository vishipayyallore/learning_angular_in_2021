import { Component, OnInit } from '@angular/core';
import { productslist } from './productslist';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products = productslist;

  constructor() { }

  ngOnInit() {
  }

}
