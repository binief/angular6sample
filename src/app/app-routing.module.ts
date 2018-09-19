import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: "signin", loadChildren: "./signin/signin.module#SigninModule" },
	{ path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
