import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthWebService } from '@layouts/auth-layout/auth.web-service';
import { LanguageService } from 'src/app/language.service';
import { Language } from 'src/app/shared/enums/language.model';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [PetsSweetAlertService, AuthWebService],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  selectedLanguage: Language = Language.English;
  resetPasswordForm?: FormGroup;

  constructor(
    private router: Router,
    private _authService: AuthWebService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
    this.resetPasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  submit(): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
