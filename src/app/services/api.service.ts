import { HttpClient } from '@angular/common/http';
import { CovidApi } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CovidService
{
    constructor (private _http : HttpClient) { }

    countries() { return this._http.get(CovidApi.allCountries)}
}