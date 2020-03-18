import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductDto } from '../interfaces/ProductDto';
import { ProductsService } from '../services/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    productForm: FormGroup;

    constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private ngZone: NgZone,
        private router: Router,) { 
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

        this.productsService.CreateProduct(productData).subscribe(res => {
            console.log('Product added!')
            this.ngZone.run(() => this.router.navigateByUrl('/products'))
          });
    }
    
}
