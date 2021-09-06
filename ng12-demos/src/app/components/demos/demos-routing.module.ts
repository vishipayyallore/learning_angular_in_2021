import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemosLandingComponent } from './demos-landing/demos-landing.component';
import { ForInAndOfComponent } from './for-in-and-of/for-in-and-of.component';
import { OnewayDatabindingComponent } from './oneway-databinding/oneway-databinding.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';

const routes: Routes = [
  {
    path: '', component: DemosLandingComponent, children: [
      { path: 'selector-demo', component: SelectorDemoComponent },
      { path: 'oneway-databinding', component: OnewayDatabindingComponent },
      { path: 'twoway-databinding', component: TwowayDatabindingComponent },
      { path: 'for-in-and-off', component: ForInAndOfComponent },
    ]
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DemosRoutingModule { }