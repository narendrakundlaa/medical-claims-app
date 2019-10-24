import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../medical.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css']
})
export class ClaimsListComponent implements OnInit {

  climsList: any[];
  /** alert veriables */
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;
  constructor(private medicalService: MedicalService) { }

  ngOnInit() {
    /** get user ID from storage */
    const userId = parseInt(localStorage.getItem('userId'), 10); /*10 is the  Missing radix parameter */
    alert('User id is' + userId);

    /** get all claims history  start here */
    this.medicalService.getClimsHistory(userId).subscribe((climsList: any) => {
      this.climsList = climsList.clientDetails;
      console.log(climsList);
    }, (err: HttpErrorResponse) => {
      if (err) {
        this.alertType = 'danger';
        this.displayAlert = true;
        this.alertMessage = ` ${err.error.message}`;
      }
      console.log('rerror', err);
    });
  }
  /** close alert button */
  closeAlert() {
    this.displayAlert = false;
  }

}
