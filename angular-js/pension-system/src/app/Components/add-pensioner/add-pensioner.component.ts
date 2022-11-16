import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PensionService } from 'src/app/Services/pension.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pensioner } from 'src/app/pensioner/pensioner.model';


@Component({
  selector: 'app-add-pensioner',
  templateUrl: './add-pensioner.component.html',
  styleUrls: ['./add-pensioner.component.css'],
})
export class AddPensionerComponent implements OnInit {
  private mode = 'create';
  private pensionerId: any;
  pensioner: Pensioner;

  constructor(private pensioneService: PensionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('pensionerId')) {
        this.mode = 'edit';
        this.pensionerId = paramMap.get('pensionerId');
        this.pensioner = this.pensioneService.getPensioner(this.pensionerId)
      } else {
        this.mode = 'create';
        this.pensionerId = '';
      }
    })
  }


  onAddPensioner(form: NgForm) {
    // console.log(form.value.p_name)
    this.pensioneService.addPensioner(
      '',
      form.value.p_name,
      form.value.p_dob,
      form.value.p_pan,
      form.value.p_aadhar,
      form.value.p_sal_earned,
      form.value.p_allowance,
      form.value.p_pension_type,
      form.value.p_bank_name,
      form.value.p_bank_acnt,
      form.value.p_bank_type
    );
  }
}
