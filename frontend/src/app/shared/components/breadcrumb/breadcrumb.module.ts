import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, IconsModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
