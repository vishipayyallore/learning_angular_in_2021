import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    productName: String = "All In One PC";
    valueForConstructor: String = '';
    valueForButton: String = '';
    isButtonDisabled = true;

    constructor() { 
        setTimeout(() => {
            this.valueForConstructor = "All In One PC Modified";
            this.isButtonDisabled = false;
        }, 3000);

    }

    ngOnInit(): void {
    }

}
