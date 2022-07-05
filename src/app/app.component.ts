import { UserLoginComponent } from './user-login/user-login.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
