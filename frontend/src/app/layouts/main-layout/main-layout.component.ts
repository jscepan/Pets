import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthWebService } from '@layouts/auth-layout/auth.web-service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { DefinitionsWebService } from 'src/app/web-services/definitions.web-service';

@Component({
  selector: 'pets-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  providers: [DefinitionsWebService, AuthWebService],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  definitionsLoaded: Observable<boolean> =
    this.definitionsStoreService.dataLoaded$;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private definitionsStoreService: DefinitionsStoreService,
    private definitionsWebService: DefinitionsWebService,
    private authWebService: AuthWebService,
    private authStoreService: AuthStoreService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.definitionsWebService
      .getAllDefinitions()
      .subscribe((definitions) => {
        this.definitionsStoreService.setDefinitions(definitions);
        this.definitionsStoreService.dataLoaded = true;
      });

    if (this.localStorageService.get('PetsJwt')) {
      this.subs.sink = this.authWebService
        .getCurrentUser()
        .subscribe((user) => {
          if (user) {
            this.authStoreService.user = user;
          }
        });
    }
  }

  changeLanguage(language: string): void {
    this.languageService.changeLanguage(language);
  }

  ngOnDestroy(): void {}
}
