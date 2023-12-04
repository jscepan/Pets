import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthWebService } from '@layouts/auth-layout/auth.web-service';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { Language } from 'src/app/shared/enums/language.model';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'pets-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [PetsSweetAlertService, AuthWebService],
})
export class LoginComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  selectedLanguage: Language = Language.English;
  loginForm?: FormGroup;

  constructor(
    private router: Router,
    private authWebService: AuthWebService,
    private authStoreService: AuthStoreService,
    private languageService: LanguageService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signIn(): void {
    // Return if the form is invalid
    if (this.loginForm?.invalid) {
      return;
    }

    // Disable the form
    this.loginForm?.disable();
    /*
    // Hide the alert
    this.showAlert = false;
*/
    // Sign in
    this.subs.sink = this.authWebService.login(this.loginForm?.value).subscribe(
      (response) => {
        this.localStorageService.set(
          'PetsJwt',
          `Bearer ${response.accessToken}`
        );
        this.authWebService
          .getCurrentUser()
          .subscribe((response: UserModel) => {
            this.authStoreService.user = response;
            this.router.navigate(['/']);

            // if (this.authStoreService.canceledURL) {
            //   this.router.navigate([
            //     decodeURI(this.authStoreService.canceledURL),
            //   ]);
            //   this.authStoreService.canceledURL = null;
            // } else {
            // this.router.navigate(['login']);
            // }
          });
      },
      (error) => {
        this.loginForm?.enable();
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
