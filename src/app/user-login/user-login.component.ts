import { UserRegistrationService } from '../common/services/fetch-api-data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  userData = { userName: '', password: '' };

  constructor(
    private registrationService: UserRegistrationService,
    private dialogRef: MatDialogRef<UserLoginComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.registrationService
      .loginUser(this.userData)
      .pipe(
        catchError((e) => {
          this.snackBar.open('Failed to login. Please retry', 'OK', {
            duration: 2000,
          });
          return throwError(() => e);
        })
      )
      .subscribe((result) => {
        this.dialogRef.close();
        console.log(result);
        // Keep user in local storage.
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        this.snackBar.open('Logged in successfully', 'OK', {
          duration: 2000,
        });
      });
  }
}
