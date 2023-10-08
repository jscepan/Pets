import { PAGE_SIZE } from '../constants';
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
    pageSize: PageSize.TEN,
    sortDirection: Sort.ASC,
    sortBy: 'title',
  };
  adSearchCriteria?: {
    title: string;
    description: string;
  } = { title: '', description: '' };
}

export enum PageSize {
  TEN = 10,
  TWENTY = 20,
  FIFTHY = 50,
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
