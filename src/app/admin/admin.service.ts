import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicalClaims } from '../models/medical.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  /* medical claims url */
  baseUrl: string = environment.baseUrl + '/mediclaim/admin/claims';
  constructor(private httpClient: HttpClient) { }

  /** junier admin list get data */

  junierAdminClaimList(): Observable<MedicalClaims[]> {
    return this.httpClient.get<MedicalClaims[]>(this.baseUrl + '/approver');
  }

  /** senier admin list get data */

  senierAdminClaimList(): Observable<MedicalClaims[]> {
    return this.httpClient.get<MedicalClaims[]>(this.baseUrl + '/seniorApprover');
  }
  /** medical claim status change method */

  statusChange(status: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, status, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

}
