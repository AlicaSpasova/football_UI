import { Component } from '@angular/core';
import { COUNTRIES } from 'src/db-data';
import { Country } from './models/country.model';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football updates';
  selectedCountry: Country;
  items = COUNTRIES;

  onSelectedCountry(country: Country) {
    this.selectedCountry = country;
  }
}
