import { PetsMenuItemI } from '../pets-menu/pets-menu-item.interface';

export interface PetsSearchBarI {
  search?: { keyword: string; placeholder: string; disabled?: boolean };
  sort: PetsMenuItemI;
  view?: 'grid' | 'list';
}
