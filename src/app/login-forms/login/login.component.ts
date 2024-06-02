import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent1 {
  signupForm: FormGroup;
  loginForm: FormGroup;
  islogin = true;
  @Output() loginSubmit = new EventEmitter();
  @Output() signUpSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignupSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.signUpSubmit.emit(this.signupForm.value)
      this.islogin = true;
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginSubmit.emit(this.loginForm.value)
    }
  }
}
