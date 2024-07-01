import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApplicationStorageService } from "./application-storage.service";
import { LoginService } from "./login.service";

@Injectable()
export class SessionGuardService implements CanActivate {
    constructor(private route: Router, private applicationStorage: ApplicationStorageService,
        private loginService: LoginService) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
        return this.isSessionValid();
    }

    isSessionValid(): Observable<boolean> {
        return Observable.create((observer: { next: (arg0: boolean) => void; }) => {
            let refreshToken = this.applicationStorage.getrefreshToken();
            if (refreshToken == undefined || refreshToken == '' || refreshToken == null) {
                let sessionRefreshToken = sessionStorage.getItem('refreshToken');
                if (sessionRefreshToken != undefined && sessionRefreshToken != null && sessionRefreshToken != '') {
                    let req = { 'refreshToken': sessionRefreshToken };
                    this.loginService.refreshToken(req).subscribe(data => {
                        this.applicationStorage.setAccessToken(data.accessToken);
                        this.applicationStorage.setUserId(data.id);
                        this.applicationStorage.setrefreshToken(data.refreshToken);
                        this.applicationStorage.setusername(data.username);
                        this.applicationStorage.setroleId(data.roleId);
                        return observer.next(true);
                    }, error => {
                        alert("Session expired")
                        this.route.navigate(['login']);
                        return observer.next(false);
                    })

                } else {
                    alert("No active Session found")
                    this.route.navigate(['login']);
                    return observer.next(false);
                }

            } else {
                if (this.isTokenExpired(this.applicationStorage.getAccessToken())) {
                    observer.next(true);
                } else {
                    let req = { 'refreshToken': this.applicationStorage.getrefreshToken() };
                    this.loginService.refreshToken(req).subscribe(data => {
                        this.applicationStorage.setAccessToken(data.accessToken);
                        this.applicationStorage.setUserId(data.id);
                        this.applicationStorage.setrefreshToken(data.refreshToken);
                        this.applicationStorage.setusername(data.username);
                        this.applicationStorage.setroleId(data.roleId);
                        return observer.next(true);
                    }, error => {
                        alert("Session expired")
                        this.route.navigate(['login']);
                        return observer.next(false);
                    })
                }
            }
        })
    }
    private isTokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return expiry * 1000 > Date.now();
    }
    
}