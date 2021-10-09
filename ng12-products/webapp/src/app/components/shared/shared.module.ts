import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';
import { StarRaitingComponent } from './star-raiting/star-raiting.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    TopNavbarComponent,
    FooterComponent,
    NotificationsButtonComponent,
    StarRaitingComponent,
    AccordionComponent
  ],
  exports: [
    TopNavbarComponent,
    FooterComponent,
    NotificationsButtonComponent,
    StarRaitingComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
