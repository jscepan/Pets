import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
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

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private definitionsStoreService: DefinitionsStoreService,
    private definitionsWebService: DefinitionsWebService,
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
    this.router.navigate(['auth/login']);
    // this.authStoreService.canceledURL = null;
    // this.authStoreService.user = null;
    // this.authStoreService.canceledURL = null;
    this.localStorageService.remove('jwt');
  }

  ngOnDestroy(): void {}
}
