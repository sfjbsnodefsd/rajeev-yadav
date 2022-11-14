import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Pensioner } from '../pensioner/pensioner.model';

const BASE_URL = 'http://localhost:6003/mngmt/get_pensioner';
const GET_PENSIONER_URL = 'http://localhost:6001/pensioner';
const ADD_PENSIONER_URL = 'http://localhost:6001/pensioner';

@Injectable({
  providedIn: 'root',
})
export class PensionService {
  public pensioners: Pensioner[] = [];
  public pensionersUpdated = new Subject<Pensioner[]>();

  public pensionersData: any;

  token = `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVldiIsInBhc3N3b3JkIjoiYWRtaW5AMTIzIiwiYWFkaGFyIjoiMTIzNDU2NzgiLCJpYXQiOjE2Njg0MTE1NDUsImV4cCI6MTY2ODQ5Nzk0NX0.lOZRnYSHmt18E9W8gNJmKXaybedrJ1JkxIEY6w-fteM`;
  getPensioners() {
    this.http
      .get(BASE_URL, {
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
    this.http
      .post(ADD_PENSIONER_URL, pensioner, {
        headers: new HttpHeaders().set('Authorization', this.token),
      })
      .subscribe((responseData) => {
        console.log(responseData);
        this.pensioners.push(pensioner);
        this.pensionersUpdated.next([...this.pensioners]);
      });
  }
  viewPensiner(p: any) {
    return this.http.get(GET_PENSIONER_URL + '/' + p.p_aadhar, {
      headers: new HttpHeaders().set('Authorization', this.token),
    });
  }
  constructor(private http: HttpClient) {}
}
