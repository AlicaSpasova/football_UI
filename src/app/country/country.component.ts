import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { COUNTRIES } from 'src/db-data';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
  title = 'football updates';
  selectedCountry: Country;
  items = COUNTRIES;
  country = new Country;

  private subscriptions: {
    queryParams?: Subscription;
  } = {};

  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscriptions.queryParams = this.activatedRoute.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.country.name = params["countryName"];
        this.country.league = params["countryLeague"];
        this.onSelectedCountry(this.country);
      }
    }); 
  }

  onSelectedCountry(country: Country) {
    this.selectedCountry = country;
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.queryParams){
      this.subscriptions.queryParams.unsubscribe();
    }
  }
}
