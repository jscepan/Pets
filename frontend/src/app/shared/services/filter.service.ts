import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  PageSize,
  PetsSearchDirectionTypes,
  SearchFilterModel,
} from '../models/search.model';
import { FilterModel } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private selectedFilters$: BehaviorSubject<SearchFilterModel> =
    new BehaviorSubject<SearchFilterModel>(new SearchFilterModel());
  public readonly selectedFilter: Observable<SearchFilterModel> =
    this.selectedFilters$.asObservable();

  setPageSize(size: PageSize): void {
    const filter = this.selectedFilters$.getValue();

    filter.adPage.pageSize = size;
    this.selectedFilters$.next({ ...filter });
  }

  setQuickSearch(search: string): void {
    const filter = this.selectedFilters$.getValue();

    filter.quickSearch = search;
    this.selectedFilters$.next({ ...filter });
  }

  setSort(sort: PetsSearchDirectionTypes): void {
    const filter = this.selectedFilters$.getValue();

    filter.adPage.sortDirection = sort;
    this.selectedFilters$.next({ ...filter });
  }

  setPriceFrom(price: number): void {
    const filter = this.selectedFilters$.getValue();
    if (filter.adSearchCriteria) {
      filter.adSearchCriteria.priceFrom = price;
      this.selectedFilters$.next({ ...filter });
    } else {
      filter.adSearchCriteria = new FilterModel();
      filter.adSearchCriteria.priceFrom = price;
      this.selectedFilters$.next({ ...filter });
    }
  }

  setPriceTo(price: number): void {
    const filter = this.selectedFilters$.getValue();
    if (filter.adSearchCriteria) {
      filter.adSearchCriteria.priceTo = price;
      this.selectedFilters$.next({ ...filter });
    } else {
      filter.adSearchCriteria = new FilterModel();
      filter.adSearchCriteria.priceTo = price;
      this.selectedFilters$.next({ ...filter });
    }
  }
}
