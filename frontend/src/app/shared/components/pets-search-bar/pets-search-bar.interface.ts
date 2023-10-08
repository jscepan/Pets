import { EnumValueModel } from '../../enums/enum.model';
import { ViewType } from '../../models/search.model';

export interface PetsSearchBarI {
  searchText: string;
  sort: {
    selected: string;
    options: EnumValueModel[];
  };
  view: ViewType;
  pageSize: {
    selected: string;
    options: EnumValueModel[];
  };
}
