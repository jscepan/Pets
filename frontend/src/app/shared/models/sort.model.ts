import {
  PetsSearchDirectionTypes,
  PetsSearchSortByTypes,
} from './search.model';

export class SortModel {
  sortDirection: PetsSearchDirectionTypes = PetsSearchDirectionTypes.ascending;
  sortBy: PetsSearchSortByTypes = PetsSearchSortByTypes.title;

  constructor(
    sortDirection: PetsSearchDirectionTypes,
    sortBy: PetsSearchSortByTypes
  ) {
    this.sortDirection = sortDirection;
    this.sortBy = sortBy;
  }
}
