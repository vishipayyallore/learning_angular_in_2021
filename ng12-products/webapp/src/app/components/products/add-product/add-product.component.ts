import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  pageTitle = 'Add Product';
  
  constructor() { }

  ngOnInit(): void {
  }

}
