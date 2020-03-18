import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductDto } from '../interfaces/ProductDto';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    productForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }

    onSubmit(productData: ProductDto): void {
		// Process Checkout Data here
		// console.warn(`Your order has been submitted with Name: ${customerData.name} Address: ${customerData.address}`);

		// this.selectedProducts = this.cartService.clearSelectedProducts();
		// this.checkoutForm.reset();
    }
    
}
