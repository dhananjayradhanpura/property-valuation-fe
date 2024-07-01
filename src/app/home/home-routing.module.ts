import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PvformComponent } from "./property-valuation-form/pvform.component";
import { PvApplicationsViewComponent } from "./property-valuation-view/pv-applications-view.component";
import { SessionGuardService } from "../service/session.guard.service";
import { AuthGuardService } from "../service/auth.guard";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: PvApplicationsViewComponent, canActivate: [SessionGuardService], pathMatch: 'full' },
            { path: 'property-valuation-view', component: PvApplicationsViewComponent, canActivate: [SessionGuardService], pathMatch: 'full' },
            { path: 'property-valuation-create', component: PvformComponent, canActivate: [SessionGuardService, AuthGuardService], data: { roles: 1 } }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }