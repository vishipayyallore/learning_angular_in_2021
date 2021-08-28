import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemosRoutingModule } from './demos-routing.module';

import { DemosLandingComponent } from './demos-landing/demos-landing.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';

@NgModule({
  declarations: [
    DemosLandingComponent,
    SelectorDemoComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
