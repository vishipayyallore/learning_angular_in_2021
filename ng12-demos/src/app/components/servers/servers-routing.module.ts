import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerComponent } from './server/server.component';

const routes: Routes = [
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
