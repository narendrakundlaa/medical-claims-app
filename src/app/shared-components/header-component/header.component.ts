import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: any;
  roleId: any;
  isLogin: boolean = false;
  currentEmail: any;
  roleBased: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.roleId = localStorage.getItem('roleId');
    // alert(this.roleId);    
    this.userId = localStorage.getItem("userId");

    this.loginService.loginStautus.subscribe(data => {
      // alert('login stauts' + data)
      this.isLogin = data;
    })
    this.currentEmail = localStorage.getItem('currentEmail');
    console.log(this.currentEmail);
  }
  logout() {
    // alert('Hello Logout');
    this.isLogin = false;
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('roleId');
    localStorage.removeItem('userId');
    // localStorage.clear();
  }
  login() {
    // alert('Hello Login');
    this.router.navigate(['/login']);
  }
}
