import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _covidService : CovidService) { }

  ngOnInit(): void { this.getCountries(); }
  getCountries() { this._covidService.countries().subscribe((data:Country[]) => { this.countries = data;})}

  countries : Country[];
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
