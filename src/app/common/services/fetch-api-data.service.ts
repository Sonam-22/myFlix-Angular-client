import { UserInfoService } from './user-info.service';
import { API_ROOT } from '../constants/constants';
import { Injectable, Type } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient, private userService: UserInfoService) {}

  /**
   * Registers a user
   * @param userDetails details of the user
   * @returns Observable of the request
   */
  public registerUser(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(`${API_ROOT}/users`, userDetails)
      .pipe(catchError(this.handleError));
  }

  /**
   * Logs in the user by making http call to login in end point
   * @param userDetails details of the user
   * @returns Observable of the http request
   */
  public loginUser(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(`${API_ROOT}/login`, userDetails)
      .pipe(catchError(this.handleError));
  }

  /**
   * Fetches all movies
   * @returns Observable of Array of movies
   */
  getAllMovies(): Observable<any> {
    // Get Authorization token stored in local storage
    const token = this.userService.getToken();
    return this.http
      .get(`${API_ROOT}/movies`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Fetch the movie details by title.
   * @param title title of the movie
   * @returns Observable of movie details
   */
  getSingleMovie(title: any): Observable<any> {
    // Get Authorization token stored in local storage
    const token = this.userService.getToken();
    return this.http
      .get(`${API_ROOT}/movies/${title}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Fetches the details of the director
   * @param name name of the the director
   * @returns Observable of details of the director
   */
  getDirector(name: any): Observable<any> {
    // Get Authorization token stored in local storage
    const token = this.userService.getToken();
    return this.http
      .get(`${API_ROOT}/movies/director/${name}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  /**
   * Fetches the details of genre by its name
   * @param genre name of the genre
   * @returns Observable of details of the genere
   */
  getGenre(genre: any): Observable<any> {
    // Get Authorization token stored in local storage
    const token = this.userService.getToken();
    return this.http
      .get(`${API_ROOT}/movies/genre/${genre}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Fetches the details of logged in user.
   * @returns Observable of user details
   */
  getUser(): Observable<any> {
    // Get Authorization token stored in local storage
    const token = this.userService.getToken();
    // Get Username stored in local storage
    const user = this.userService.getUser();
    const username = user.userName;
    return this.http
      .get(`${API_ROOT}/users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  /**
   * Adds movie to user's favourite
   * @param movieID id of the movie
   * @returns Observable of request
   */
  addFavoriteMovie(movieID: string): Observable<any> {
    const token = this.userService.getToken();
    // Get Username stored in local storage
    const user = this.userService.getUser();
    const username = user.userName;
    return this.http
      .post(`${API_ROOT}/users/${username}/movies/${movieID}`, null, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Removes the movie from user's favorite list.
   * @param movieID id of the moview
   * @returns Observable of the request
   */
  removeFavoriteMovie(movieID: any): Observable<any> {
    // Get Authorization token stored in local storage
    const token = this.userService.getToken();
    // Get Username stored in local storage
    const user = this.userService.getUser();
    const username = user.userName;
    return this.http
      .delete(`${API_ROOT}/users/${username}/movies/${movieID}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Updates the user details
   * @param updateDetails user details
   * @returns Observable of request
   */
  updateUser(updateDetails: any): Observable<any> {
    const token = this.userService.getToken();
    // Get Username stored in local storage
    const user = this.userService.getUser();
    const username = user.userName;
    return this.http
      .put(`${API_ROOT}/users/${username}`, updateDetails, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Deletes a user
   * @returns  Observable of request
   */
  deleteUser(): Observable<any> {
    const token = this.userService.getToken();
    // Get Username stored in local storage
    const user = this.userService.getUser();
    const username = user.userName;
    return this.http
      .delete(`${API_ROOT}/users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        responseType: 'text',
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
