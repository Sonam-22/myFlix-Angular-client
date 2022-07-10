# MyFlixAngularClient

Angular client-side application called myFlix based on its existing server-side code (REST API and database)

## Key features

1. The app should display a welcome view where users will be able to either login or register an account.
2. Once authenticated, the user should now view all movies.
   - User will see movie as card and each card will display movie's director, its banner, its Genere, its details button and a "mark as favorite button"
   - On click of director's name on the movie card, user will see the details of director.
   - On click of Genre button, the user will see the movie genre details in a modal.
   - On click of Details button, user will see the description of movie.
   - On toggling the "mark as favorite button", user will be able to mark a movie favorite or remove it from the favorite list.
3. On the top app navigation bar, user will see movies , profile and logout link.
   - Movies link will take the user to movies page.
   - Profile link will take the user to user's profile page.
   - Logout link will logout the user.
4. On the user's profile page, they will be able to view their profile details, edit their profile details and
   delete their account completely.

## Tech Stack

1. Angular 14.0.4.
2. Angular Material 14.0.4
3. RxJs
4. TypeScript
5. Github pages for deployment

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8080/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
