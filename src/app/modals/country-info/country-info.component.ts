import { Component, OnInit, Inject } from '@angular/core';
import { Country } from 'src/app/pages/home/home.component';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Country) { }

  ngOnInit(): void { }
 
}
