import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MedicalClaims } from 'src/app/models/medical.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  /** array of variables */
  junierApprover: any[];
  senierApprover: any[];

  /** alert variables */
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  roleId: any;
  junier: boolean = false;

  /** reusable tables to show based on approver 1 and approver 2  */
  junierTable: boolean = false;
  senierTable: boolean = false;
  tableTitleJunierAndSenier: string = 'Approve/Reject';
  HeadersJunierAndSenier: string[];
  junierClaimsList: MedicalClaims[];
  senierClaimsList: MedicalClaims[];
  objectStatusPass = {};
  objectReferPass = {};

  constructor(private adminService: AdminService) { }
  ngOnInit() {
    this.HeadersJunierAndSenier = ['Claim ID ', 'Policy Id', 'Policy Amount', 'Medical Diagnosis', 'Summery', 'Action'];

    this.roleId = localStorage.getItem('roleId');
    /** show approver tables based on role Id */
    if (this.roleId === 2) {
      this.junier = true;
    } else if (this.roleId === 3) {
      this.junier = false;
    }

    /** get junier admin claim list */
    this.adminService.junierAdminClaimList().subscribe((list: any) => {

      this.junierClaimsList = list.viewClaims;
      console.log(this.HeadersJunierAndSenier);
      console.log(this.junierClaimsList);
    });

    /* get list of senierApprover */
    this.adminService.senierAdminClaimList().subscribe((list: any) => {
      this.senierClaimsList = list.viewClaims;

      console.log(list.viewClaims);
    });

  }

  /** status change function */
  status(clime: MedicalClaims, event: any) {
    let s: number;
    console.log(clime);
    if (this.roleId === 2) {
      s = 1;
    } else if (this.roleId === 3) {
      s = 2;
    }

    this.objectStatusPass = {
      claimId: clime.claimId,
      status: 'approved' + s
    };
    this.adminService.statusChange(this.objectStatusPass).subscribe((status) => {
      console.log(this.objectStatusPass);
      if (status.statusCode === 200) {
        this.alertType = 'success';
        this.displayAlert = true;
        this.alertMessage = ` ${status.message}`;
      }
    });
  }
  /** refer Back 'POST' function */
  referBack(clime: any, event: any) {
    console.log(clime);
    this.objectReferPass = {
      claimId: clime.claimId,
      status: 'referredBack'
    };
    this.adminService.statusChange(this.objectReferPass).subscribe((status) => {
      if (status.statusCode === 200) {
        this.alertType = 'info';
        this.displayAlert = true;
        this.alertMessage = ` has beeen refered back`;
      }
    });
  }
}
