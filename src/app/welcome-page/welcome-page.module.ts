import { MatButtonModule } from '@angular/material/button';
import { UserRegistrationModule } from './../user-registration/user-registration.module';
import { UserLoginModule } from './../user-login/user-login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    UserLoginModule,
    UserRegistrationModule,
    MatButtonModule,
  ],
})
export class WelcomePageModule {}
