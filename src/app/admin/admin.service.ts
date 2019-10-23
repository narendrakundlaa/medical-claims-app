import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) { }
  /** junier admin list get data */
  junierAdminClaimList(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.baseUrl + '/mediclaim/admin/claims/approver');
  }

  /** senier admin list get data */
  senierAdminClaimList(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.baseUrl + '/mediclaim/admin/claims/seniorApprover');
  }
  /** medical claim status change method */
  statusChange(status: any): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + '/mediclaim/admin/claims', status, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }
  // admin(employee: any): Observable<any> {
  //   return this.httpClient.post<any>(environment.baseUrl + '/mediclaim/admin/claims', employee, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   })
  // }
}
