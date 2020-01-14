import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },    
  { path: 'landingpage', component: AppComponent },
  { path: 'demo1', component: Demo1Component },    
    { path: 'person', component: PersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
