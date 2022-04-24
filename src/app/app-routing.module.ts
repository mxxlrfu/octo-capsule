import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@home/home.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: "ticket",
		loadChildren: () => import("@ticket/ticket.module").then((m) => m.TicketModule),
	},
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: false,
			scrollPositionRestoration: "enabled",
			paramsInheritanceStrategy: "always",
			relativeLinkResolution: "legacy",
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
