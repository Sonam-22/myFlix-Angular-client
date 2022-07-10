import { UserRegistrationService } from './../../common/services/fetch-api-data.service';
import { UserInfoService } from './../../common/services/user-info.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  userData = {
    userName: '',
    password: '',
    email: '',
    birthday: '',
  };

  constructor(
    private userInfoService: UserInfoService,
    private userRegService: UserRegistrationService,
    private dialogRef: MatDialogRef<EditorComponent>
  ) {}

  ngOnInit(): void {
    this.initUser();
  }

  updateProfile() {
    this.userRegService.updateUser(this.userData).subscribe((newUser) => {
      this.userInfoService.setUser(newUser);
      this.dialogRef.close();
    });
  }

  private initUser() {
    const user = this.userInfoService.getUser();
    this.userData.userName = user.userName;
    this.userData.email = user.email;
    this.userData.birthday = user.birthday;
  }
}
