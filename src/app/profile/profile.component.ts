import { ConfirmationDialogComponent } from './../confirmation-dialog/confirmation-dialog.component';
import { UserRegistrationService } from './../common/services/fetch-api-data.service';
import { UserInfoService } from './../common/services/user-info.service';
import { UserRegistrationComponent } from './../user-registration/user-registration.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(
    private userInfoService: UserInfoService,
    private userRegistrationService: UserRegistrationService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Get user details from local storage
   */
  getUser(): void {
    this.user = this.userInfoService.getUser();
  }

  openEditProfileDialog(): void {
    this.dialog
      .open(EditorComponent, {
        width: '50vw',
      })
      .afterClosed()
      .subscribe(() => {
        this.getUser();
      });
  }

  deleteProfile(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          title: 'Delete Account',
          question:
            'Are you sure to delete your account? This cannot be undone.',
        },
        width: '50vh',
      })
      .afterClosed()
      .subscribe((res) => {
        if (res === 'yes') {
          this.userRegistrationService.deleteUser().subscribe((result) => {
            this.userInfoService.logout();
            this.snackBar.open('Account has been deleted successfully', 'OK', {
              duration: 3000,
            });
            this.router.navigate(['welcome']);
          });
        }
      });
  }
}
