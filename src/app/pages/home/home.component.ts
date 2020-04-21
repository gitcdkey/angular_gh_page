import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/api.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CountryInfoComponent } from 'src/app/modals/country-info/country-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _covidService : CovidService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void { this.getCountries(); }
  getCountries() { this._covidService.countries().subscribe((data:Country[]) => { this.countries = data; this.notFilteredCountries = data;})}
  
  countries : Country[];
  filter : string;
  notFilteredCountries : Country[];
  
  arrayFiltering() { if (this.filter != "") { this.countries = filterArray(this.countries, this.filter); } else { this.countries = this.notFilteredCountries;} }

  openBottomSheet(country : Country): void {
    this._bottomSheet.open(CountryInfoComponent, { data: country })
  }

}

export interface Country
{
  country : string;
  cases : number;
  todayCases : number;
  deaths : number;
  todayDeaths : number;
  recovered : number;
  active : number;
  critical : number;
  casesPerOneMillion : number;
  deathsPerOneMillion : number;
  totalTests : number;
  testsPerOneMillion : number;
}

function filterArray(countries:Country[], filter :string)
{
  countries = countries.filter(s => s.country.toLowerCase().includes(filter.toLowerCase()));
  return countries;
}
