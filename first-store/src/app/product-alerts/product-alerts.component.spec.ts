import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';
import { ProductDto } from '../interfaces/ProductDto';
import { ProductDetailsComponent } from '../product-details/product-details.component';

describe('ProductAlertsComponent', () => {
  let component: ProductAlertsComponent;
  let fixture: ComponentFixture<ProductAlertsComponent>;
  let product: ProductDto;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;

    product = {id: 1, price:123.34, name: 'Dummy Product', description: 'Dummy Description'};
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
