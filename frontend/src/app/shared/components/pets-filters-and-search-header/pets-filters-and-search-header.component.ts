import {
  // ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  PageSize,
  PetsSearchDirectionTypes,
  SearchFilterModel,
  ViewType,
} from '../../models/search.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnumValueModel } from '../../enums/enum.model';
import { TranslateService } from '@ngx-translate/core';
import { enumToEnumKeyModel, enumToEnumValueModel } from '../../utils';
import { SortModel } from '../../models/sort.model';

@Component({
  selector: 'pets-filters-and-search-header',
  templateUrl: './pets-filters-and-search-header.component.html',
  styleUrls: ['./pets-filters-and-search-header.component.scss'],
  // changeDetection: ChangeDete/ctionStrategy.OnPush,
})
export class PetsFiltersAndSearchHeaderComponent implements OnInit, OnDestroy {
  @Input() dataModel!: SearchFilterModel | null;

  @Output() changeEvent: EventEmitter<{ type: string; value: any }> =
    new EventEmitter();

  searchBarForm?: FormGroup;

  pageSizeOptions: EnumValueModel[] = enumToEnumValueModel(PageSize) || [];
  pageSortOptions: EnumValueModel[] =
    enumToEnumKeyModel(PetsSearchDirectionTypes) || [];

  expanded: boolean = true;

  viewType: ViewType = ViewType.list;
  viewTypeEnum = ViewType;

  filters: EnumValueModel[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.filters = [];
    if (this.dataModel?.adSearchCriteria?.priceFrom) {
      this.filters.push({
        value: 'priceFrom',
        displayName:
          this.translateService.instant('priceFrom') +
          ' ' +
          this.dataModel?.adSearchCriteria.priceFrom,
      });
    }
    if (this.dataModel?.adSearchCriteria?.priceTo) {
      this.filters.push({
        value: 'priceTo',
        displayName:
          this.translateService.instant('priceTo') +
          ' ' +
          this.dataModel?.adSearchCriteria.priceTo,
      });
    }
  }

  ngOnInit(): void {
    this.setSearchBar();
    this.searchBarForm = new FormGroup({
      pageSize: new FormControl(this.dataModel?.adPage.pageSize, [
        Validators.required,
      ]),
      pageSort: new FormControl(this.dataModel?.adPage.sortBy, [
        Validators.required,
      ]),
    });
  }

  setSearchBar(): void {
    // this.searchBarModel = {
    //   searchText: '',
    //   view: ViewType.list,
    //   sort: {
    //     selected: 'yyy',
    //     options: enumToEnumValueModel(PetsSearchDirectionTypes),
    //   },
    //   pageSize: {
    //     selected: PageSize.fifthy.toString(),
    //     options: enumToEnumValueModel(PageSize),
    //   },
    // };
  }

  searchBarEventHandler(event: { type: string; value: string }): void {
    switch (event.type) {
      case 'pageSize':
        // this.filterService.setPageSize(event.value as PageSize);
        break;
      case 'sort':
        //
        break;
      case 'viewType':
        // this.viewType = event.value as ViewType;
        break;
    }
  }

  changePageSize(value: string): void {
    this.changeEvent.emit({ type: 'pageSize', value });
  }

  changeSortBy(value: string): void {
    this.changeEvent.emit({ type: 'sort', value });
  }

  changeView(value: ViewType): void {
    this.viewType = value;
    this.changeEvent.emit({ type: 'viewType', value });
  }

  resetFilter(): void {
    // TODO
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }

  remove(filterValue: string): void {
    this.filters = this.filters.filter((f) => f.value !== filterValue);
  }

  ngOnDestroy(): void {}
}
