import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _covidService : CovidService) { }

  ngOnInit(): void {
    
  }

}
