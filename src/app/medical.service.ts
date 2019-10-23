import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {
  fileUploadUrl: string = '';
  constructor(private httpClient: HttpClient) { }


  /** send form with required params */
  sendFiles(event, form) {
    const formData = new FormData();
    console.log('1', event.target.file);
    console.log('2', event.target.files[0]);
    formData.append('file', event.target.files[0]);
    formData.append('userId', form.value.usedId);
    formData.append('policyId', form.value.policyId);
    return this.httpClient.post(this.fileUploadUrl, formData);
  }
  /** get Policies */
  getPolicies(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.baseUrl + '/mediclaim/members/' + userId + '/policy');
  }

  /** get claims history */
  getClimsHistory(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.baseUrl + '/mediclaim/members/' + userId + '/claims');
  }
  /* Add claim function start*/
  addClaims(employee: any): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + '/mediclaim/claims', employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
