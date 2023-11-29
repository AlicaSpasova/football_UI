import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryComponent } from "./country/country.component";
import { TeamComponent } from "./team/team.component";

/* ROUTES WARNING!!!
 *
 * Path parameter with loadChildren affects Msal Service.
 * If path value found (contains) in any Http request it ignores Authorization!
 * Example: if {Path: 'inv'} then eny request to api/inv, api/some-inv, api/invitation is unathorized
 * Use unique path value that will not contains in any http request
 *
 */
const routes: Routes = [
	{
		path: "",
		component: CountryComponent,
		data: { breadcrumb: { display: true }}
	},
    {
		path: "team",
		component: TeamComponent,
		data: { breadcrumb: { label: "Team", display: true }}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
