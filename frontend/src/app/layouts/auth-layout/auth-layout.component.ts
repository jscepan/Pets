import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { DefinitionsWebService } from 'src/app/web-services/definitions.web-service';

@Component({
  selector: 'pets-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  providers: [DefinitionsWebService, LocalStorageService],
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  definitionsIsLoading: Observable<boolean> =
    this.definitionsStoreService.dataLoaded$;
  companyLogo: string =
    'https://tse1.mm.bing.net/th?id=OIP.8TQYxFy-aIYn7WTbKEg06gHaEK&pid=Api&P=0&h=180';

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private definitionsStoreService: DefinitionsStoreService,
    private definitionsWebService: DefinitionsWebService,
    private authStoreService: AuthStoreService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.definitionsWebService
      .getAllDefinitions()
      .subscribe((definitions) => {
        this.definitionsStoreService.setDefinitions(definitions);
      });
  }

  changeLanguage(language: string): void {
    this.languageService.changeLanguage(language);
  }

  logout(): void {
    this.router.navigate(['/']);
    this.authStoreService.canceledURL = null;
    this.authStoreService.user = null;
    this.authStoreService.canceledURL = null;
    this.localStorageService.remove('PetsJwt');
  }

  redirectToHome(): void {
    this.router.navigate(['/']);
  }

  back(): void {
    this.router.navigate(['/ads']);
  }

  ngOnDestroy(): void {}
}
