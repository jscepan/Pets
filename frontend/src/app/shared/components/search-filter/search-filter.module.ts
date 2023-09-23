import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [SearchFilterComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, IconsModule],
  exports: [SearchFilterComponent],
})
export class SearchFilterModule {}
