import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { ApplicationStorageService } from "./application-storage.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private route: Router, private applicationStorage: ApplicationStorageService) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
        let requiredRole = route.data["roles"] as number;
        let userRoleId = this.applicationStorage.getroleId();
        if (requiredRole == userRoleId) {
            return true;
        } else {
            alert("You don't have permission to access this resource");
            this.route.navigate(["login"])
            return false;
        }
    }
}