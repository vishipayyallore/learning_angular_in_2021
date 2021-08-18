import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { SelectorDemoComponent } from './components/demos/selector-demo/selector-demo.component';
import { DatabingingDemoComponent } from './components/demos/databinging-demo/databinging-demo.component';
import { DemosLandingComponent } from './components/demos/demos-landing/demos-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorDemoComponent,
    DatabingingDemoComponent,
    DemosLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
