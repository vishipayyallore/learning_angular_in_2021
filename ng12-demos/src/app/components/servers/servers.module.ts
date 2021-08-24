import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerComponent } from './server/server.component';
import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers/servers.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    ServerComponent,
    ServersComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    ServersRoutingModule
  ]
})
export class ServersModule { }
