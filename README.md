# Project's Title

Football API

## Project Description

This is a small football (soccer) updates application that follows results from the top 5 European leagues.
For this project were used such Angular technologies as:
1. Angular routings
2. Design table via MatTableModule
3. RxJs for GET requests to API
4. QueryParams to pass data between the components
5. Add MatSnackBarModule to explain to user if something goes wrong with GET requests from API

# ApmNew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Publish to GitHub Pages

```
npm install -g angular-cli-ghpages  
ngh --dir=dist/apm-new
ng build --prod --base-href https://AlicaSpasova.github.io/football_UI/
```