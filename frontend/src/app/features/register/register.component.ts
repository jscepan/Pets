import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { EnumValueModel } from 'src/app/shared/components/enums/enum.model';
import { Language } from 'src/app/shared/components/enums/language.model';
import { SweetAlertService } from 'src/app/shared/components/sweet-alert/sweet-alert.service';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [SweetAlertService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();


  selectedLanguage: Language = Language.English;

  constructor(
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
  }

  createAccount(): void {
    this.router.navigate(['ads']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
