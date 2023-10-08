import { SearchFilterModel } from '../../models/search.model';
import { PetsMenuItemI } from '../pets-menu/pets-menu-item.interface';

export interface PetsSearchBarI {
  search: SearchFilterModel;
  sort?: PetsMenuItemI;
  view?: 'grid' | 'list';
}
