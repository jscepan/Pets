import { NUMBER_OF_ITEMS_ON_PAGE } from '../constants';
import { Sort } from '../enums/sort.model';

export class SearchFilterModel {
  quickSearch: string = '';
  adPage: {
    pageNumber: number;
    pageSize: number;
    sortDirection: Sort;
    sortBy: string;
  } = {
    pageNumber: 0,
    pageSize: NUMBER_OF_ITEMS_ON_PAGE,
    sortDirection: Sort.ASC,
    sortBy: 'title',
  };
  adSearchCriteria?: {
    title: string;
    description: string;
  } = { title: '', description: '' };
}
