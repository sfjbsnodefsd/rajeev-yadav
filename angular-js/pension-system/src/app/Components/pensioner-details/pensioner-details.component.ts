import { Component, OnInit } from '@angular/core';
import { PensionService } from 'src/app/Services/pension.service';

@Component({
  selector: 'app-pensioner-details',
  templateUrl: './pensioner-details.component.html',
  styleUrls: ['./pensioner-details.component.css'],
})
export class PensionerDetailsComponent implements OnInit {
  constructor(private pensioneService: PensionService) {}

  ngOnInit(): void {
    this.getAllPensioner();
  }
  getAllPensioner(): void {
    const d = this.pensioneService.getPensioners();
    console.log(d);
    console.log('Heteeee');
  }
}
