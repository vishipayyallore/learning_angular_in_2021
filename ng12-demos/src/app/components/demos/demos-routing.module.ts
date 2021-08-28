import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemosLandingComponent } from './demos-landing/demos-landing.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';

const routes: Routes = [
  {
    path: '', component: DemosLandingComponent, children: [
      { path: 'selector-demo', component: SelectorDemoComponent },
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
