import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { TopNavbarComponent } from './components/shared/top-navbar/top-navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PageNotfoundComponent } from './components/shared/page-notfound/page-notfound.component';
// import { AboutusComponent } from './components/home/aboutus/aboutus.component';
// import { ContactusComponent } from './components/home/contactus/contactus.component';
import { HomeModule } from './components/home/home.module';
import { HomeRoutingModule } from './components/home/home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    TopNavbarComponent,
    FooterComponent,
    PageNotfoundComponent,
    // AboutusComponent,
    // ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
