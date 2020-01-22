import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProductDto } from '../interfaces/ProductDto';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: ProductDto;
  @Output() notifyUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
