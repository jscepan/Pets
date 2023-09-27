import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  signUpForm?: UntypedFormGroup;
  hasUpperCase: boolean = false;
  hasLowerCase: boolean = false;
  hasNumeric: boolean = false;
  hasEightCharacters: boolean = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group(
      {
        username: ['', Validators.required, Validators.email],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      {}
    );
  }

  createAccount(): void {
    this.router.navigate(['ads']);
  }

  isPasswordValid(): boolean {
    this.hasUpperCase = /[A-Z]+/.test(this.signUpForm?.get('password')?.value);
    this.hasLowerCase = /[a-z]+/.test(this.signUpForm?.get('password')?.value);
    this.hasNumeric = /\d/g.test(this.signUpForm?.get('password')?.value);
    this.hasEightCharacters =
      this.signUpForm?.get('password')?.value?.length >= 8;
    const passwordValid =
      this.hasUpperCase &&
      this.hasLowerCase &&
      this.hasNumeric &&
      this.hasEightCharacters;
    return passwordValid;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
