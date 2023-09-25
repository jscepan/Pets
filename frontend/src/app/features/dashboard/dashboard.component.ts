import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith } from 'rxjs';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { SweetAlertService } from 'src/app/shared/components/sweet-alert/sweet-alert.service';
import { SearchModel } from 'src/app/shared/models/search.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
@Component({
  selector: 'pets-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SweetAlertService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  keyword: string = '';

  searchFilter: SearchModel = new SearchModel();

  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions?: Observable<string[]>;

  category?: { thumbnailUrl: string; name: string };
  categoryCtrl: FormControl = new FormControl();
  filteredCategories?: Observable<any[]>;

  categories: { value: string; thumbnailUrl: string; name: string }[] = [
    // {
    //   value: 'string',
    //   thumbnailUrl:
    //     'https://static.vecteezy.com/system/resources/previews/000/567/006/original/vector-dog-icon.jpg',
    //   name: 'Pets',
    // },
    // {
    //   value: 'string',
    //   thumbnailUrl:
    //     'https://icon-library.com/images/accessories-icon-png/accessories-icon-png-3.jpg',
    //   name: 'Accessories',
    // },
    // {
    //   value: 'string',
    //   thumbnailUrl: 'https://vectorified.com/images/icon-service-com-12.jpg',
    //   name: 'Services',
    // },
  ];

  constructor(
    private definitionsStoreService: DefinitionsStoreService,
    private languageService: LanguageService,
    private globalService: GlobalService,
    private translateService: TranslateService,
    private sweetAlertService: SweetAlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.definitionsStoreService.definitions$.subscribe((definitions) => {
      definitions?.adsType.forEach((type) => {
        this.categories.push({
          thumbnailUrl: type.thumbnailUrl,
          value: type.value,
          name: type.displayValue[this.languageService.selectedLanguage],
        });
      });
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((val) => this.filter(val))
    );

    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(''),
      map((state) =>
        state ? this.filterCategories(state) : this.categories.slice()
      )
    );
  }
  filter(val: string): string[] {
    return this.options.filter(
      (option) => option.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  selectCategory(item: { thumbnailUrl: string; name: string }): void {
    this.category = item;
  }

  filterCategories(name: string) {
    return this.categories.filter(
      (state) => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
