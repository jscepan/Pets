import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthWebService } from '@layouts/auth-layout/auth.web-service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthWebService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  signUpForm?: UntypedFormGroup;

  constructor(private router: Router, private authWebService: AuthWebService) {}

  ngOnInit(): void {
    this.signUpForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [Validators.required]),
      passwordConfirm: new UntypedFormControl('', []),
    });
  }

  createAccount(): void {
    this.subs.sink = this.authWebService
      .register(this.signUpForm?.value)
      .subscribe((res) => {
        console.log(res);
        // this.router.navigate(['ads']);
      });
  }

  switchToSignIn(): void {
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
