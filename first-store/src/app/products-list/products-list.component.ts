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

  shareProduct() {
    window.alert('The product has been shared!');
  }

  onNotifyUser() {
    window.alert('You will be notified when the product goes on sale');
  }
  
}
