import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { TermsAndConditionsModel } from 'src/app/shared/models/terms-and-conditions.model';
import { TermsAndConditionsWebService } from 'src/app/web-services/terms-and-conditions.web-service';

@Component({
  selector: 'pets-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  providers: [TermsAndConditionsWebService],
})
export class TermsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = ['value', 'zipCode', 'edit', 'delete'];
  terms: TermsAndConditionsModel[] = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: TermsAndConditionsWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.webService
      .getAllTermsAndConditions()
      .subscribe((terms) => {
        this.terms = terms;
      });
  }

  createNew(): void {
    // TODO
  }

  editItem(element: TermsAndConditionsModel): void {
    // TODO
  }

  deleteItem(element: TermsAndConditionsModel): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
