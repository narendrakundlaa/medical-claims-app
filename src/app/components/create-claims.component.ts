import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicalService } from '../medical.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-claims',
  templateUrl: './create-claims.component.html',
  styleUrls: ['./create-claims.component.css']
})
export class CreateClaimsComponent implements OnInit {
  employeeForm: FormGroup;

  /** alert veriables */
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private medicalService: MedicalService) { }

  ngOnInit() {
    /** employee form */
    this.employeeForm = this.fb.group({
      userId: [''],
      policyId: [''],
      admissionDate: [''],
      dischargeDate: [''],
      patientName: [''],
      claimAmount: [null],
      hospitalName: [''],
      dischargeSummary: [''],
      diagnosis: []
    });
  }
  onSubmit() {
    /** send request for claims */
    this.medicalService.addClaims(this.employeeForm.value).subscribe((sendClaim: any) => {
      if (sendClaim.statusCode === 201) {
        this.alertType = 'success';
        this.displayAlert = true;
        this.alertMessage = ` ${this.employeeForm.get('patientName').value} record has been created`;
      }
    }, (err: HttpErrorResponse) => {
      if (err) {
        this.alertType = 'danger';
        this.displayAlert = true;
        this.alertMessage = ` ${err.error.message}`;
      }
    });
  }
  /** close alert button */
  closeAlert() {
    this.displayAlert = false;
    this.router.navigate(['/home']);
  }

  /** file alert method and send required param */
  fileChane(event: any) {
    this.medicalService.sendFiles(event, this.employeeForm).subscribe((data: any) => {
      console.log(data);
      console.log(data.statusCode);
      if (data.statusCode === 200) {
        alert('File is submited successfully...');
      } else {
        alert('Server issue: file uploading failed, please try again..');
      }
    });

  }
}
