import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../medical.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private medicalService: MedicalService) { }
  /** array of policies */
  policies: any[];

  ngOnInit() {
    /** get user ID from storage */
    const userId = parseInt(localStorage.getItem('userId'), 10);
    alert(userId);
    /** get list of policies */
    this.medicalService.getPolicies(userId).subscribe((policiesResponce: any) => {
      this.policies = policiesResponce.polices;
    });
  }

}
