import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-2',
  templateUrl: './login-2.component.html',
  styleUrls: ['./login-2.component.scss']
})
export class Login2Component {
  signupForm: FormGroup;
  loginForm: FormGroup;
  @Output() loginSubmit = new EventEmitter();
  @Output() signUpSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      password: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

   }

  ngOnInit(): void {

  }

  onSignupSubmit() {
    if (this.signupForm.valid) {
      this.signUpSubmit.emit(this.signupForm.value)
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
     this.loginSubmit.emit(this.loginForm.value)
    }
  }

}
