import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetailsModule } from './../movie-details/movie-details.module';
import { DirectorModule } from './../director/director.module';
import { GenreModule } from './../genre/genre.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { NavbarModule } from './../navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    NavbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    GenreModule,
    DirectorModule,
    MovieDetailsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class MoviesModule {}
