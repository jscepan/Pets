import {
  PageSize,
  PetsSearchDirectionTypes,
  PetsSearchSortByTypes,
} from './search.model';

export class AdPageModel {
  pageNumber?: number;
  pageSize?: PageSize;
  sortDirection?: PetsSearchDirectionTypes;
  sortBy?: PetsSearchSortByTypes;
}
