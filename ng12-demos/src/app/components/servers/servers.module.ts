import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerComponent } from './server/server.component';
import { ServersRoutingModule } from './servers-routing.module';

@NgModule({
  declarations: [
    ServerComponent
  ],
  imports: [
    CommonModule,
    ServersRoutingModule
  ]
})
export class ServersModule { }
