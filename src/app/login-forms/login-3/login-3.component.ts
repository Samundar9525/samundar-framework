import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-3',
  templateUrl: './login-3.component.html',
  styleUrls: ['./login-3.component.scss']
})
export class Login3Component {
  signupForm: FormGroup;
  signinForm: FormGroup;
  isLoginVisible = true;
  @Output() loginSubmit = new EventEmitter();
  @Output() signUpSubmit = new EventEmitter();
  @Output() showTermServices = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      re_pass: ['', [Validators.required, Validators.minLength(6)]],
      agreeTerm: [false, Validators.requiredTrue]
    });

    this.signinForm = this.fb.group({
      your_name: ['', [Validators.required, Validators.minLength(3)]],
      your_pass: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }



 onsignupSubmit() {
    if (this.signupForm.valid) {
      this.signUpSubmit.emit(this.signupForm.value)
    }
  }


  onloginSubmit() {
    if (this.signinForm.valid) {
      this.loginSubmit.emit(this.signinForm.value)
    }
  }

  termServicesClicked(){
    this.showTermServices.emit(true);
  }
}
