import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemosLandingComponent } from './components/demos/demos-landing/demos-landing.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'pagenotfound',
		loadChildren: () => import('./components/shared/shared.module').then(m => m.SharedModule),
	},
	{
		path: 'products',
		loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule),
	},
	{
		path: 'servers',
		loadChildren: () => import('./components/servers/servers.module').then(m => m.ServersModule),
	},
	{ path: 'demos', component: DemosLandingComponent },
	{ path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
	{ path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
