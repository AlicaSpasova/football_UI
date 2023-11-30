import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { StandingsTableComponent } from './standings-table/standings-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { CountryButtonComponent } from './country-button/country-button.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    StandingsTableComponent,
    CountryButtonComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
