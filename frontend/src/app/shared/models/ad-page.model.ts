import {
  PageSize,
  PetsSearchDirectionTypes,
  PetsSearchSortByTypes,
} from './search.model';

export class AdPageModel {
  pageNumber?: number;
  pageSize: PageSize = PageSize.thirtySix;
  sortDirection: PetsSearchDirectionTypes = PetsSearchDirectionTypes.ascending;
  sortBy: PetsSearchSortByTypes = PetsSearchSortByTypes.created;
}
