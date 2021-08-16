import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

const routes: Routes = [
  { path: '', component: ServersComponent },
  { path: 'server', component: ServerComponent },
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
