import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerComponent } from './server/server.component';
import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    ServerComponent,
    ServersComponent
  ],
  imports: [
    CommonModule,
    ServersRoutingModule
  ]
})
export class ServersModule { }
