import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginRequest } from "../../model/login-request.model";
import { ApplicationStorageService } from "../../service/application-storage.service";
import { LoginService } from "../../service/login.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  request= new LoginRequest();
  show: boolean = false;
constructor(private _loginService: LoginService,private router: Router, public fb: FormBuilder,private applicationStorage: ApplicationStorageService){

}
// click event function toggle
password() {
  this.show = !this.show;
}
form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  submit() {
    if (this.form.valid) {
      this.request.username = this.form.value.username;
      this.request.password = this.form.value.password;
      this._loginService.login(this.request).subscribe(res=>{
 
          this.applicationStorage.setAccessToken(res.accessToken);
          this.applicationStorage.setUserId(res.id);
          this.applicationStorage.setrefreshToken(res.refreshToken);
          this.applicationStorage.setusername(res.username);
          this.applicationStorage.setroleId(res.roleId);
          this.applicationStorage.setbusinessUnit(res.businessUnit);
          sessionStorage.setItem('refreshToken', res.refreshToken )
          this.router.navigate(["home"]);
      },(error=>{
        alert("Invalid username or password");
      }
      ));
    }
  }
  
}