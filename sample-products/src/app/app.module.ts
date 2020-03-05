import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBandComponent } from './top-band/top-band.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBandComponent,
    ProductsListComponent,
    LandingPageComponent,
    AddProductComponent,
    ModifyProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
