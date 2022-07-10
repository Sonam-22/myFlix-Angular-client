import { UserLoginComponent } from './../user-login/user-login.component';
import { UserRegistrationComponent } from './../user-registration/user-registration.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
  constructor(private dialog: MatDialog) {}

  /**
   * opens the user registration dialog.
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationComponent, {
      width: '50vw',
    });
  }

  /**
   * opens the user login dialog.
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginComponent, {
      width: '50vw',
    });
  }
}
