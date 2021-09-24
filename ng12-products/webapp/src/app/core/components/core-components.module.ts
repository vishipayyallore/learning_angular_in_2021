import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertComponent } from './alerts/error-alert/error-alert.component';



@NgModule({
  declarations: [
    ErrorAlertComponent
  ],
  exports: [
    ErrorAlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreComponentsModule { }
