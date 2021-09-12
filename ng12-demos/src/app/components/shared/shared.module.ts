import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavBarComponent } from './top-navbar/top-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';

@NgModule({
  declarations: [
    TopNavBarComponent,
    FooterComponent,
    NotificationsButtonComponent,
  ],
  exports: [
    TopNavBarComponent,
    FooterComponent,
    NotificationsButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
