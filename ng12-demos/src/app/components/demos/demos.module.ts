import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemosRoutingModule } from './demos-routing.module';

import { DemosLandingComponent } from './demos-landing/demos-landing.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { OnewayDatabindingComponent } from './oneway-databinding/oneway-databinding.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import { ForInAndOfComponent } from './for-in-and-of/for-in-and-of.component';

@NgModule({
  declarations: [
    DemosLandingComponent,
    SelectorDemoComponent,
    OnewayDatabindingComponent,
    TwowayDatabindingComponent,
    ForInAndOfComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
