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
            { path: 'pvview', component: PvApplicationsViewComponent, canActivate: [SessionGuardService], pathMatch: 'full' },
            { path: 'pvform', component: PvformComponent, canActivate: [SessionGuardService, AuthGuardService], data: { roles: 'ffaaa2ee-aebd-442c-b71b-a60b76322e90' } }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }