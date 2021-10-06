import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sv-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  pageTitle = 'Add Product';

  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.productForm = this.formBuilder.group({
      name: '',
    });
  }

  ngOnInit(): void {
  }

  onProductAdd(productData: any) {
  }

}
