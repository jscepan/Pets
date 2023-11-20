import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ArrayResponseI } from 'src/app/core/interfaces/array-response.interface';
import { EntityBaseWebService } from 'src/app/core/services/entity-base.web-service';
import { BaseModel } from '../models/base-model';
import { SearchFilterModel } from '../models/search.model';
import { Sort } from '../enums/sort.model';

export class ListEntities<T extends BaseModel> {
  private entities$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  private totalEntitiesLength$: BehaviorSubject<number | undefined> =
    new BehaviorSubject<number | undefined>(undefined);
  private bottomReached$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public entities: Observable<T[]> = this.entities$.asObservable();
  public totalEntitiesLength: Observable<number | undefined> =
    this.totalEntitiesLength$.asObservable();
  public isLoading: Observable<boolean> = this.isLoading$.asObservable();

  private searchModel: SearchFilterModel = new SearchFilterModel();

  private NUMBER_OF_ITEMS_ON_PAGE: number = 36;

  private webService?: EntityBaseWebService<T>;

  get numberOfItemsOnPage(): number {
    return this.NUMBER_OF_ITEMS_ON_PAGE;
  }

  set numberOfItemsOnPage(value: number) {
    this.NUMBER_OF_ITEMS_ON_PAGE = value;
    this.requestFirstPage();
  }

  public resetNumberOfItemsOnPage(): void {
    this.NUMBER_OF_ITEMS_ON_PAGE = 36;
    this.requestFirstPage();
  }

  public constructor() {}

  public setWebService(webService: EntityBaseWebService<T>): ListEntities<T> {
    this.webService = webService;
    return this;
  }

  public setOrdering(orderType: Sort): ListEntities<T> {
    this.searchModel.adPage.sortBy = orderType;
    return this;
  }

  public setFilter(searchFilter: SearchFilterModel): void {
    this.searchModel = searchFilter;
    this.requestFirstPage();
  }

  public requestFirstPage(): void {
    this.bottomReached$.next(false);
    this.entities$.next([]);
    this.totalEntitiesLength$.next(0);
    this.requestNextPage();
  }

  public requestNextPage(): void {
    if (!this.bottomReached$.getValue()) {
      this.isLoading$.next(true);
      this.webService
        ?.searchEntities(
          this.searchModel
          // this.entities$.getValue().length || 0,
          // this.NUMBER_OF_ITEMS_ON_PAGE
        )
        .pipe(
          finalize(() => {
            this.isLoading$.next(false);
          })
        )
        .subscribe((response: ArrayResponseI<T>) => {
          this.entities$.next(
            this.entities$.getValue().concat(response.content)
          );
          const length = this.entities$.getValue().length || 0;
          this.bottomReached$.next(!(length < response.totalElements));
          this.totalEntitiesLength$.next(response.totalElements);
        });
    }
  }
}
