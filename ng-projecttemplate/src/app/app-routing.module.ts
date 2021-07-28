import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { ContactusComponent } from './components/home/contactus/contactus.component';
import { PageNotfoundComponent } from './components/shared/page-notfound/page-notfound.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'aboutus', component: AboutusComponent },
  // { path: 'contactus', component: ContactusComponent },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  { path: 'pagenotfound', component: PageNotfoundComponent },
  { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
