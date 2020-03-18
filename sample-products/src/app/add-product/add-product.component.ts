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

    constructor(private formBuilder: FormBuilder) { 
        this.productForm = this.formBuilder.group({
			id: '',
            name: '',
            price: '',
            description: ''            
		});
    }

    ngOnInit(): void {
    }

    onSubmit(productData: ProductDto): void {
		// Process Checkout Data here
		console.warn(`Your order has been submitted with Name: ${productData.name} Address: ${productData.description}`);

		// this.selectedProducts = this.cartService.clearSelectedProducts();
		// this.checkoutForm.reset();
    }
    
}
