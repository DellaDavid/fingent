import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  formSubmitted: boolean = false;

  constructor(private _formbuilder: FormBuilder,private _router: Router) { 
    this.loginFormGroup = this._formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ngOnInit() {
  }

  submit(){
    this.formSubmitted = true;
    if(this.loginFormGroup.controls.email.value == 'fingent' && this.loginFormGroup.controls.password.value) this._router.navigateByUrl('/user/dashboard');
  }
  

}
