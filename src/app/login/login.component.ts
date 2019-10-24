import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';

/** global environment for URL */
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /** form variables */
  loginForm: FormGroup;
  submitted = false;

  /** user data */
  email: string;
  password: string;
  userId: number;

  /** alert variables */
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private loginService: LoginService) { }

  ngOnInit() {

    /** forms create */
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [
        Validators.required,
        Validators.minLength(2)]],
    });
  }
  /** get form data */
  get f() { return this.loginForm.controls; }

  /** login function */
  login() {
    console.log(this.loginForm.value);

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    const loginUrl = 'http://192.168.43.189:7770/mediclaim/users/login';
    this.http.post(loginUrl, this.loginForm.value).subscribe((res: any) => {
      const userIDis = 'userId';
      console.log(res[userIDis]);
      console.log(res.roleId);
      const status = res.statusCode;
      const roleId = res.roleId;
      /* status chacking */
      if (status === 200) {
        if (roleId === 2 || roleId === 3) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }

        this.loginService.updateLoginStatus(true);
        localStorage.setItem('currentEmail', this.loginForm.controls.email.value);
        localStorage.setItem('userId', res[userIDis]);
        localStorage.setItem('roleId', roleId);
        console.log(roleId);
      }
    }, (err: HttpErrorResponse) => {
      /** error handling */
      if (err) {
        this.alertType = 'danger';
        this.displayAlert = true;
        this.alertMessage = ` Invalid user or incorrect  password`;
      }
      console.log('rerror', err);
    });
  }

  /** clear alert */
  closeAlert() {
    this.displayAlert = false;
    this.loginForm.reset();

  }

}
