import { UserInfoService } from './../common/services/user-info.service';
import { MovieDetailsComponent } from './../movie-details/movie-details.component';
import { DirectorComponent } from './../director/director.component';
import { GenreComponent } from './../genre/genre.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationService } from './../common/services/fetch-api-data.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  favouriteMovies: any[] = [];
  loading = false;

  constructor(
    private userRegistrationService: UserRegistrationService,
    private userInfoService: UserInfoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Init hook of the component. Fetch movies and set favorite movies.
   */
  ngOnInit(): void {
    this.getMovies();
    this.setFavoriteMovies();
  }

  /**
   * Gets movies from api call and sets the movies state to return JSON file
   * @returns array holding movies objects
   * @function getAllMovies
   */
  getMovies(): void {
    this.loading = true;
    this.userRegistrationService
      .getAllMovies()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((movies: any) => {
        this.movies = movies;
      });
  }

  /**
   * Gets favorite movies from api call and sets the favorite movies variable to return JSON file
   * @returns array holding ids of user's favorite movies
   * @function getFavoriteMovies
   */
  setFavoriteMovies(): void {
    const user = this.userInfoService.getUser();
    this.favouriteMovies = user.favouriteMovies;
  }

  /**
   * checks if a movie is included in the user's list of favorite movies
   * @param id
   * @returns true, if the movie is a favorite move, else false
   */
  isFavMovie(id: string): boolean {
    return this.favouriteMovies.includes(id);
  }

  /**
   * Opens genre details modal
   * @param name name of the genere
   * @param description description of the genre
   */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        name,
        description,
      },
      width: '50vw',
    });
  }

  /**
   * Opens director details modal
   * @param name name of director
   * @param bio bio of director
   * @param birthday birthday of director
   * @param death death day of director
   */
  openDirectorDialog(
    name: string,
    bio: string,
    birthday: Date,
    death: Date
  ): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name,
        bio,
        birthday,
        death,
      },
      width: '50vw',
    });
  }

  /**
   * Opens movie details modal
   * @param title title of movie
   * @param description description of movie
   */
  openMovieDetailsModal(title: string, description: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        title,
        description,
      },
      width: '50vw',
    });
  }

  /**
   * adds a movie to the list of favorite movies via an API call
   * @param id
   * @function addFavoriteMovie
   */
  addToFavoriteMovies(id: string): void {
    console.log(id);
    this.userRegistrationService.addFavoriteMovie(id).subscribe((result) =>
      this.updateFavouriteMovie(
        id,
        // append the favourite to the list
        (favs) => favs.concat(id)
      )
    );
  }

  /**
   * removes a movie from the list of favorite movies via an API call
   * @param id
   * @function removeFavoriteMovie
   */
  removeFromFavoriteMovies(id: string): void {
    console.log(id);
    this.userRegistrationService.removeFavoriteMovie(id).subscribe(() =>
      this.updateFavouriteMovie(id, (favs) =>
        // removes the favourite movie from list
        favs.filter((favId) => favId !== id)
      )
    );
  }

  /**
   * Updates the favourite movie.
   * @param id id of the user
   * @param op operation to be performed on the favourite moview
   */
  private updateFavouriteMovie(id: string, op: (favs: string[]) => string[]) {
    const user = this.userInfoService.getUser();
    user.favouriteMovies = op(user.favouriteMovies);
    this.userInfoService.setUser(user);
    this.setFavoriteMovies();
  }
}
