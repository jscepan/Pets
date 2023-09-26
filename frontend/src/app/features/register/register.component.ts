import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { EnumValueModel } from 'src/app/shared/components/enums/enum.model';
import { Language } from 'src/app/shared/components/enums/language.model';
import { SweetAlertService } from 'src/app/shared/components/sweet-alert/sweet-alert.service';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [SweetAlertService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  signUpForm?: UntypedFormGroup;
  passwordsDifferent: boolean = false;
  tokenValid: boolean = true;
  hasUpperCase: boolean = false;
  hasLowerCase: boolean = false;
  hasNumeric: boolean = false;
  hasEightCharacters: boolean = false;

  constructor(
    private definitionsStoreService: DefinitionsStoreService,
    private _formBuilder: UntypedFormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          { value: '', disabled: true },
          [Validators.required, Validators.email],
        ],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
        customerName: [''],
        invitationId: [''],
      },
      {}
    );
    // this.signUpForm?.setValidators(this.comparisonValidator());
  }

  createAccount(): void {
    this.router.navigate(['ads']);
  }

  // public comparisonValidator(): ValidatorFn {
  //   return (group: FormGroup): ValidationErrors => {
  //       const password = group.controls['password'];
  //       const confirmPassword = group.controls['passwordConfirm'];
  //       if (password.value !== confirmPassword.value) {
  //           confirmPassword.setErrors({ notEquivalent: true });
  //       } else {
  //           confirmPassword.setErrors(null);
  //       }
  //       return;
  //   };

  isPasswordValid(): boolean {
    this.hasUpperCase = /[A-Z]+/.test(this.signUpForm?.get('password')?.value);
    this.hasLowerCase = /[a-z]+/.test(this.signUpForm?.get('password')?.value);
    this.hasNumeric = /\d/g.test(this.signUpForm?.get('password')?.value);
    this.hasEightCharacters = this.signUpForm?.get('password')?.value?.length >= 8;
    const passwordValid = this.hasUpperCase && this.hasLowerCase && this.hasNumeric && this.hasEightCharacters;

    return /*!this.setPasswordForm.invalid && passwordsMatch && */ passwordValid;
}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
