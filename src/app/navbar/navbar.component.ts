import { Router } from '@angular/router';
import { UserInfoService } from './../common/services/user-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private userInfoSerivce: UserInfoService,
    private router: Router
  ) {}

  /**
   * Logs out the user
   */
  logout() {
    this.userInfoSerivce.logout();
    this.router.navigate(['welcome']);
  }
}
