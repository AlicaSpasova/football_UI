import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../models/country.model';

@Component({
  selector: 'bt-country',
  templateUrl: './country-button.component.html',
  styleUrls: ['./country-button.component.css']
})
export class CountryButtonComponent {
  @Input("item") nameOfCountry: Country;
  @Output() selectedCountry = new EventEmitter<Country>();

  selectCountry (value: Country) {
    this.selectedCountry.emit(value);
  }
}
