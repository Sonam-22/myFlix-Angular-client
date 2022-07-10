import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from './../common/services/fetch-api-data.service';
import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  userData = {
    userName: '',
    password: '',
    email: '',
    birthday: '',
  };

  constructor(
    private registrationService: UserRegistrationService,
    private dialogRef: MatDialogRef<UserRegistrationComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  registerUser(): void {
    this.registrationService
      .registerUser(this.userData)
      .pipe(
        catchError((e) => {
          this.snackBar.open('Failed to register. Please retry', 'OK', {
            duration: 2000,
          });
          return throwError(() => e);
        })
      )
      .subscribe((result) => {
        this.dialogRef.close();
        this.snackBar.open(
          'Congrats ! You are registered successfully, Please login with your credentials',
          'OK',
          {
            duration: 5000,
          }
        );
      });
  }
}
