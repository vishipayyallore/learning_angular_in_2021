import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { ConvertToSpacesPipe } from '@app/core/products/pipes/converttospaces.pipe';
import { SharedModule } from '@app/components/shared/shared.module';
import { CoreComponentsModule } from '@app/core/components/core-components.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    ConvertToSpacesPipe,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    CoreComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
