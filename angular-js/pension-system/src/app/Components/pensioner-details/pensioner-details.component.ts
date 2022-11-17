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
  public pensioner: Pensioner;
  apiRes: any;
  processPension: any;
  PensionAmount: any;
  BankServiceCharge: any;
  constructor(private pensioneService: PensionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('aadhar')) {
        this.aadhar = <any>paramMap.get('aadhar');
        this.pensioneService.viewPensioner(this.aadhar).subscribe((response) => {
          console.log(response);
          this.apiRes = response;
          if (this.apiRes.success == 1) {
            console.log(this.apiRes.data);
            this.pensioner = this.apiRes.data;
          }
        });
      }
    });
  }
  calculataPension(aadhar: any) {
    console.log(aadhar);
    this.pensioneService.processPensioner(this.aadhar).subscribe((response) => {
      console.log(response);
      this.processPension = response;
      if (this.processPension.success == 1) {
        this.PensionAmount = this.processPension.data.PensionAmount;
        this.BankServiceCharge = this.processPension.data.BankServiceCharge;
        console.log(this.PensionAmount);
      } else {
        this.PensionAmount = 0;
        this.BankServiceCharge = 0;
      }
    });
  }
}
