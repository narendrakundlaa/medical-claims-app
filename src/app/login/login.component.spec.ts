import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.invalid).toBeFalsy();
  });
  it('email fiels validity', () => {
    let errors = {};
    let email = component.loginForm.controls.email.value;
    expect(email.valid).toBeFalsy();


    /* email field is required*/
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    /*set some value to email*/
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattren']).toBeTruthy();

    /* email correct value sample */
    email.setValue('john@gmail.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattren']).toBeFalsy();
  });
  it('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];

    /* Email password is required */
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    /* Set password to something */
    password.setValue("1");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    /* Set password to something correct*/
    password.setValue("12345");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('submitting a form  a user', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['email'].setValue("test@test.com");
    component.loginForm.controls['password'].setValue("123456789");
    expect(component.loginForm.valid).toBeTruthy();
  });

});
