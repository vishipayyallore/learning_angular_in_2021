import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerComponent } from './components/server/server.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'pagenotfound',
		loadChildren: () => import('./components/shared/shared.module').then(m => m.SharedModule),
	},
	{ path: 'servers', component: ServerComponent },
	{ path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
	{ path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
