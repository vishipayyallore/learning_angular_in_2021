import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { ConvertToSpacesPipe } from '@app/core/products/pipes/converttospaces.pipe';
import { SharedModule } from '@app/components/shared/shared.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
