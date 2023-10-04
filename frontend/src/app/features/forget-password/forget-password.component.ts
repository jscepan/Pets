import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthWebService } from '@layouts/auth-layout/auth.web-service';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { Language } from 'src/app/shared/enums/language.model';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import {
  PetsSweetAlertI,
  PetsSweetAlertTypeEnum,
} from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pets-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  providers: [PetsSweetAlertService, AuthWebService],
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  selectedLanguage: Language = Language.English;
  forgetPasswordForm?: FormGroup;

  constructor(
    private router: Router,
    private sweetAlertService: PetsSweetAlertService,
    private translateService: TranslateService,
    private authWebService: AuthWebService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  sendEmail(): void {
    // TODO
    this.subs.sink = this.authWebService
      .requestPasswordReset(this.forgetPasswordForm?.value)
      .subscribe(() => {
        const sweetAlertModel: PetsSweetAlertI = {
          mode: 'success',
          icon: 'alert-triangle',
          type: {
            name: PetsSweetAlertTypeEnum.confirm,
            buttons: {
              confirm: this.translateService.instant('confirm'),
            },
          },
          title: this.translateService.instant('emailSent'),
          message: this.translateService.instant(
            'emailSuccessfullySentCheckYouEmailAndSpamFolder'
          ),
        };
        this.subs.sink =
          this.sweetAlertService.openMeSweetAlert(sweetAlertModel);
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
