import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PensionService } from 'src/app/Services/pension.service';
import { Pensioner } from 'src/app/pensioner/pensioner.model';

@Component({
  selector: 'app-list-pensioner',
  templateUrl: './list-pensioner.component.html',
  styleUrls: ['./list-pensioner.component.css'],
})
export class ListPensionerComponent implements OnInit, OnDestroy {
  apiRes: any;
  public pensioners: Pensioner[] = [];
  public pensionersSub: Subscription;
  constructor(private pensioneService: PensionService) { }

  ngOnInit(): void {
    this.getAllPensioner();
  }
  getAllPensioner(): void {
    this.pensioneService.getPensioners();
    this.pensionersSub = this.pensioneService
      .getPensionerUpdateListener()
      .subscribe((pensioners) => {
        this.pensioners = pensioners;
      });
  }
  onDelete(id: any) {
    this.pensioneService.deletePensioner(id);
  }
  viewPensioner(p: any): void {
    const viewData = this.pensioneService.viewPensiner(p);
    viewData.subscribe((response) => {
      console.log(response);
      this.apiRes = response;
      if (this.apiRes.success == 1) {
        console.log(this.apiRes.data);
        this.pensioners = this.apiRes.data;
      } else {
        this.pensioners = [];
      }
    });
  }
  ngOnDestroy(): void {
    this.pensionersSub.unsubscribe();
  }
}
