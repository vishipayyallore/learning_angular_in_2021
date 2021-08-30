import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    TopNavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopNavbarComponent,
    FooterComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
