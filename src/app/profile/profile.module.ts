import { MatInputModule } from '@angular/material/input';
import { EditorComponent } from './editor/editor.component';
import { NavbarModule } from './../navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DirectorModule } from '../director/director.module';
import { GenreModule } from '../genre/genre.module';
import { MovieDetailsModule } from '../movie-details/movie-details.module';
import { ConfirmationDialogModule } from '../confirmation-dialog/confirmation-dialog.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, EditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    GenreModule,
    DirectorModule,
    MovieDetailsModule,
    MatIconModule,
    MatButtonModule,
    ConfirmationDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
  ],
})
export class ProfileModule {}
