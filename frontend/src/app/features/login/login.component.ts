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
    private _authService: AuthWebService,
    private authStoreService: AuthStoreService,
    private languageService: LanguageService
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
    this.subs.sink = this._authService.login(this.loginForm?.value).subscribe(
      () => {
        this.router.navigate([
          this.authStoreService.canceledURL || 'create-edit',
        ]);
      },
      (response) => {
        /*
                // Re-enable the form
                this.loginForm.enable();
                this.serverBadLogin = true;

                // Reset the form
                // this.signInNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type: 'error',
                    message: 'Login failed: invalid credentials. Please check and try again.'
                };

                // Show the alert
                this.showAlert = true;
*/
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
