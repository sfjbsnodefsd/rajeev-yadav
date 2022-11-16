import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PensionService } from 'src/app/Services/pension.service';
import { Pensioner } from 'src/app/pensioner/pensioner.model';

@Component({
  selector: 'app-pensioner-details',
  templateUrl: './pensioner-details.component.html',
  styleUrls: ['./pensioner-details.component.css'],
})
export class PensionerDetailsComponent implements OnInit {
  private aadhar: number;
  public pensioner: Pensioner
  constructor(private pensioneService: PensionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('aadhar')) {
        this.aadhar = <any>paramMap.get('aadhar');
        this.pensioner = this.pensioneService.getPensioner(this.aadhar);
        console.log("view=====")
        console.log(this.pensioner)
      }
    });
  }
  getAllPensioner(): void {
    const d = this.pensioneService.getPensioners();
    console.log(d);
    console.log('Heteeee');
    // this.router.navigate([""])
  }
}
