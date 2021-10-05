import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  pageTitle = 'Edit Product';

  constructor() { }

  ngOnInit(): void {
  }

}
