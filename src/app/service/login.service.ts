import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstants } from "../app.constants";
import { LoginRequest } from "../model/login-request.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {

  }
  login(request: LoginRequest): Observable<any> {
    let url = AppConstants.HOST + '/api/v1/auth/signin';
    return this.http.post<any>(url, request);
  }
  logout(): Observable<any> {
    let url = AppConstants.HOST + '/api/v1/auth/signout';
    return this.http.get<any>(url);
  }
  refreshToken(request: any): Observable<any> {
    let url = AppConstants.HOST + '/api/v1/auth/refreshtoken';
    return this.http.post<any>(url, request);
  }
}