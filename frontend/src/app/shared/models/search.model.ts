import { FilterModel } from './filter.model';

export class SearchFilterModel {
  quickSearch: string = '';
  adPage: {
    pageNumber: number;
    pageSize: PageSize;
    sortDirection: PetsSearchDirectionTypes;
    sortBy: PetsSearchSortByTypes;
  } = {
    pageNumber: 0,
    pageSize: PageSize.thirty,
    sortDirection: PetsSearchDirectionTypes.ascending,
    sortBy: PetsSearchSortByTypes.title,
  };
  adSearchCriteria?: FilterModel;
}

export enum PageSize {
  thirty = '30',
  fifthy = '50',
  hundred = '100',
}

export enum PetsSearchSortByTypes {
  created = 'CreatedOn',
  modified = 'ModifiedOn',
  name = 'name',
  title = 'title',
}

export enum PetsSearchDirectionTypes {
  ascending = 'ASC',
  descending = 'DESC',
}

export enum ViewType {
  grid = 'GRID',
  list = 'LIST',
}
