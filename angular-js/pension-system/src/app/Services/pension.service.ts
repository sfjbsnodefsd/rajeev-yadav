import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Pensioner } from '../pensioner/pensioner.model';

const PENSION_MNGMT_SERVICE_URL = 'http://localhost:6003/mngmt';
const GET_PENSIONER_URL = 'http://localhost:6001/pensioner';
const PENSIONER_URL = 'http://localhost:6001/pensioner';

@Injectable({
  providedIn: 'root',
})
export class PensionService {
  public pensioners: Pensioner[] = [];
  public pensionersUpdated = new Subject<Pensioner[]>();

  public pensionersData: any;

  token = `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVldiIsInBhc3N3b3JkIjoiYWRtaW5AMTIzIiwiYWFkaGFyIjoiMTIzNDU2NzgiLCJpYXQiOjE2Njg2MTA2MjMsImV4cCI6MTY2ODY5NzAyM30.zxFK_rvU37c59TxaXmL08ceRZWpLQOw8m4NHMz8gtyQ`;
  getPensioners() {
    this.http
      .get(PENSION_MNGMT_SERVICE_URL + "/get_pensioner", {
        headers: new HttpHeaders().set('Authorization', this.token),
      })
      .subscribe((pensionersData: any) => {
        this.pensioners = pensionersData.data;
        console.log(this.pensioners);
        this.pensionersUpdated.next([...this.pensioners]);
      });
  }
  getPensionerUpdateListener() {
    return this.pensionersUpdated.asObservable();
  }
  addPensioner(
    _id: String,
    p_name: String,
    p_dob: String,
    p_pan: String,
    p_aadhar: Number,
    p_sal_earned: Number,
    p_allowance: String,
    p_pension_type: String,
    p_bank_name: String,
    p_bank_acnt: String,
    p_bank_type: String
  ) {
    const pensioner: Pensioner = {
      _id: '',
      p_name,
      p_dob,
      p_pan,
      p_aadhar,
      p_sal_earned,
      p_allowance,
      p_pension_type,
      p_bank_name,
      p_bank_acnt,
      p_bank_type,
    };
    console.log(pensioner);
    this.http
      .post(PENSIONER_URL, pensioner, {
        headers: new HttpHeaders().set('Authorization', this.token),
      })
      .subscribe((responseData: any) => {
        console.log(responseData);
        pensioner._id = responseData.data._id;
        console.log(pensioner);
        this.pensioners.push(pensioner);
        this.pensionersUpdated.next([...this.pensioners]);
      });
  }
  deletePensioner(id: string) {
    this.http
      .delete(PENSIONER_URL + '/' + id, {
        headers: new HttpHeaders().set('Authorization', this.token),
      })
      .subscribe((delRes: any) => {
        console.log(delRes);
        const updatedPensioner = this.pensioners.filter(
          (pensioner) => pensioner._id !== id
        );
        this.pensioners = updatedPensioner;
        this.pensionersUpdated.next([...this.pensioners]);
      });
  }
  getPensioner(aadhar: number) {
    return <Pensioner>{ ...this.pensioners.find((p) => p.p_aadhar == aadhar) };
  }
  viewPensiner(aadhar: string) {
    console.log(aadhar)
    return this.http.get(PENSION_MNGMT_SERVICE_URL + '/get_pensioner_details/' + aadhar, {
      headers: new HttpHeaders().set('Authorization', this.token),
    });
  }
  constructor(private http: HttpClient) { }
}
