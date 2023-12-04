import { BehaviorSubject, Observable } from 'rxjs';
import { SubscriptionManager } from './subscription.manager';
import { SelectionManager } from './selection.manager';
import { ArrayResponseI } from 'src/app/core/interfaces/array-response.interface';
import { PageSize, SearchFilterModel } from '../models/search.model';
import { BaseModel } from '../models/base-model';

type RequestFn<M extends { oid: string }, Filter extends SearchFilterModel> = (
  filter: Filter
) => Observable<ArrayResponseI<M>>;
type ResponseFn<M extends { oid: string }, C extends BaseModel> = (
  responseModels: M[]
) => C[];

export abstract class ListManager<
  M extends BaseModel,
  C extends BaseModel,
  Filter extends SearchFilterModel
> {
  public readonly selection: SelectionManager<C> = new SelectionManager<C>();
  public readonly response$: Observable<C[]> = this.selection.items$;

  public subs: SubscriptionManager = new SubscriptionManager();

  public listIsEmpty$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public length$: BehaviorSubject<number | undefined> = new BehaviorSubject<
    number | undefined
  >(undefined);
  public bottomReached$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public lastResponse$: BehaviorSubject<M[]> = new BehaviorSubject<M[]>([]);
  public totalCount$: BehaviorSubject<number | undefined> = new BehaviorSubject<
    number | undefined
  >(undefined);
  public totalPageCount$: BehaviorSubject<number | undefined> =
    new BehaviorSubject<number | undefined>(undefined);
  public currentPage$: BehaviorSubject<number | undefined> =
    new BehaviorSubject<number | undefined>(undefined);

  private readonly _entities = new BehaviorSubject<M[]>([]);

  private _filter?: Filter | undefined;
  private requestFn!: RequestFn<M, Filter>;

  get filter(): Filter | undefined {
    return this._filter;
  }

  public setRequestFn(requestFn: RequestFn<M, Filter>): void {
    this.requestFn = requestFn;
  }

  public setResponseFn(prepareResponseData: ResponseFn<M, C>): void {
    this.subs.sink.$dataResponse = this.subscribeToData().subscribe(
      (responseModel: M[]) => {
        this.selection.setItems(prepareResponseData(responseModel));
      }
    );
  }

  public updateSelectionItems(cards: C[]): void {
    this.selection.setItems(cards);
  }

  public addSelection<D extends BaseModel>(
    prepareResponseData: ResponseFn<M, D>
  ): SelectionManager<D> {
    const attachedSelection: SelectionManager<D> = new SelectionManager();
    this.subs.sink = this.subscribeToData().subscribe((responseModel: M[]) => {
      attachedSelection.setItems(prepareResponseData(responseModel));
    });
    return attachedSelection;
  }

  setPageSize(size: PageSize): void {
    if (this._filter) {
      this._filter.adPage.pageSize = size;
      this.requestFirstPage();
    }
  }

  public get entities(): M[] {
    return this._entities.getValue();
  }

  public set entities(entities: M[]) {
    this._entities.next(entities);
  }

  setFilter(filter: Filter): void {
    this._filter = filter;
    this.requestPageNumber(this._filter.adPage.pageNumber || 0);
  }

  public subscribeToData(): Observable<M[]> {
    return this._entities.asObservable();
  }
  sortByEventType(sortByValue: string): void {
    // switch (sortByValue) {
    //   case 'azAlphabetically':
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.name],
    //       direction: [MeSearchDirectionTypes.ascending]
    //     });
    //     break;
    //   case 'zaAlphabetically':
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.name],
    //       direction: [MeSearchDirectionTypes.descending]
    //     });
    //     break;
    //   case 'azAlphabeticallyTitle':
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.title],
    //       direction: [MeSearchDirectionTypes.ascending]
    //     });
    //     break;
    //   case 'zaAlphabeticallyTitle':
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.title],
    //       direction: [MeSearchDirectionTypes.descending]
    //     });
    //     break;
    //   case 'newest':
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.modified],
    //       direction: [MeSearchDirectionTypes.descending]
    //     });
    //     break;
    //   case 'oldest':
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.modified],
    //       direction: [MeSearchDirectionTypes.ascending]
    //     });
    //     break;
    //   case 'custom':
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.orderID, MeSearchSortByTypes.modified],
    //       direction: [MeSearchDirectionTypes.ascending, MeSearchDirectionTypes.descending]
    //     });
    //     break;
    //   default:
    //     this.setSort({
    //       attribute: [MeSearchSortByTypes.modified],
    //       direction: [MeSearchDirectionTypes.descending]
    //     });
    // }
  }

  public requestFirstPage(initialLoad: boolean = false): void {
    this.selection.setItems([]);
    this.bottomReached$.next(false);
    this.entities = [];
    this.totalCount$.next(0);
    this.currentPage$.next(0);
    this.length$.next(0);
    this.listIsEmpty$.next(false);

    this.requestPageNumber(0);
  }

  public requestPageNumber(pageNumber: number): void {
    this.isLoading$.next(true);
    if (this._filter) {
      this._filter.adPage.pageNumber = pageNumber;
      this.subs.sink.$dataRequest = this.requestFn(this._filter).subscribe({
        next: (response: ArrayResponseI<M>) => {
          this.listIsEmpty$.next(
            response.content.length === 0 ||
              (this.currentPage$.getValue() === 1 &&
                response.content.length === 0)
          );
          this._entities.next(response.content);

          this.lastResponse$.next(response.content);
          this.length$.next(this.entities.length || 0);
          this.isLoading$.next(false);
          this.totalCount$.next(response.totalElements);
          this.currentPage$.next(response.pageable.pageNumber);
          this.totalPageCount$.next(response.totalPages);

          if (response.last) {
            this.bottomReached$.next(true);
          }
        },
        error: () => {
          this.isLoading$.next(false);
        },
      });
    }
  }

  public getEntity(oid: string): M | undefined {
    return this.entities.find((entity: M) => {
      return entity.oid === oid;
    });
  }

  public refreshEntities(): void {
    this.entities = [...this.entities];
  }

  public removeEntities(oids: string[]): void {
    const entities: M[] = this.entities.filter(
      (item) => !oids.includes(item.oid)
    );
    this.entities = entities;

    this.length$.next(this.entities.length || 0);
    // todo check if works right
    this.listIsEmpty$.next(!entities?.length);
  }

  public addEntity(entity: M, top: boolean = false): void {
    // case we want to update the entity and also put it to top of entities array
    if (top) {
      this.entities = [entity, ...this.entities];
    } else {
      this.entities = [...this.entities, entity];
    }

    this.length$.next(this.entities.length || 0);
    this.listIsEmpty$.next(!this.entities.length);
  }

  public updateEntity(updatedEntity: M, top: boolean = false): void {
    // case we want to update the entity and also put it to top of entities array
    if (top) {
      this.entities = [
        updatedEntity,
        ...this.entities.filter((entity) => {
          return entity.oid !== updatedEntity.oid;
        }),
      ];
    } else {
      this.entities = this.entities.map((entity) => {
        return entity.oid === updatedEntity.oid ? updatedEntity : entity;
      });
    }
  }
}
