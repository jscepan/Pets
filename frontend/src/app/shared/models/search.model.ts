import { Sort } from '../enums/sort.model';

export class SearchFilterModel {
  quickSearch: string = '';
  adPage: {
    pageNumber: number;
    pageSize: PageSize;
    sortDirection: Sort;
    sortBy: string;
  } = {
    pageNumber: 0,
    pageSize: PageSize.ten,
    sortDirection: Sort.ASC,
    sortBy: 'title',
  };
  adSearchCriteria?: {
    title: string;
    description: string;
  } = { title: '', description: '' };
}

export enum PageSize {
  ten = 10,
  twenty = 20,
  fifthy = 50,
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
