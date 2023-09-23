import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/language.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  providers: [LocalStorageService],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

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
