import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PVAppService } from '../service/pvApp.service';
import { ApplicationStorageService } from '../service/application-storage.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  view: boolean = true;

  constructor(private router: Router, private pvAppService: PVAppService, private appStorageService: ApplicationStorageService,
    private loginService: LoginService, private applicationStorage: ApplicationStorageService) {

  }
  ngOnInit(): void {
    this.pvAppService.getNextAppRefNo().subscribe((res: any) => {
      this.appStorageService.setRefNo(res);
    });
  }

  logout() {
    this.loginService.logout().subscribe(res => {
      this.applicationStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['signin'])
    }, (error => {
      this.applicationStorage.clear();
      this.router.navigate(['signin'])
    }
    ));
  }

}
