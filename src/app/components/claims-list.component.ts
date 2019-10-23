import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalService } from '../medical.service';

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
  constructor(private medicalService: MedicalService,
    private router: Router) { }

  ngOnInit() {
    /** get user ID from storage */
    const userId = parseInt(localStorage.getItem("userId"));

    /* get all claims history  start here */
    this.medicalService.getClimsHistory(userId).subscribe((climsList: any) => {
      this.climsList = climsList.clientDetails;
      console.log(climsList);
    })
  }
  /** close alert button */
  closeAlert() {
    this.displayAlert = false;
  }

}
