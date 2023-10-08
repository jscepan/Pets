import { EnumValueModel } from '../../enums/enum.model';
import { SearchFilterModel } from '../../models/search.model';

export interface PetsSearchBarI {
  search: SearchFilterModel;
  sort: {
    selected: string;
    options: EnumValueModel[];
  };
  view?: 'grid' | 'list';
}
