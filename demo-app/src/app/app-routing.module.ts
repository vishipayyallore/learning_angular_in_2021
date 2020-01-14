import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo1/demo1.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },    
  { path: 'home', component: HomeComponent },
  { path: 'demo1', component: Demo1Component },    
    { path: 'person', component: PersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
