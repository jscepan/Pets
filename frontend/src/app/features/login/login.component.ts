import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { Language } from 'src/app/shared/components/enums/language.model';
import { SweetAlertService } from 'src/app/shared/components/sweet-alert/sweet-alert.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SweetAlertService],
})
export class LoginComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  selectedLanguage: Language = Language.English;
  loginForm?: FormGroup;

  constructor(
    private router: Router,
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
    /*
    // Return if the form is invalid
    if (this.loginForm?.invalid) {
        return;
    }

    // Disable the form
    this.loginForm?.disable();

    // Hide the alert
    this.showAlert = false;

    // Sign in
    this._authService.signIn(this.loginForm?.value)
        .subscribe(
            () => {

                // Set the redirect url.
                // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                // to the correct page after a successful sign in. This way, that url can be set via
                // routing file and we don't have to touch here.
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);

            },
            (response) => {

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
            }
        );
        */
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
