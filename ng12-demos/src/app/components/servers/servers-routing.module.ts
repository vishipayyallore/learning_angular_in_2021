import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersComponent } from './servers/servers.component';
import { LandingComponent } from './landing/landing.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent, children: [
      { path: 'servers', component: ServersComponent },
      { path: 'server', component: ServerComponent },
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
export class ServersRoutingModule { }
