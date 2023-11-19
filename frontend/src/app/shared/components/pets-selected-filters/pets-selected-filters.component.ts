import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EnumValueModel } from '../../enums/enum.model';
import { TranslateService } from '@ngx-translate/core';
import { FilterModel } from '../../models/filter.model';

@Component({
  selector: 'pets-selected-filters',
  templateUrl: './pets-selected-filters.component.html',
  styleUrls: ['./pets-selected-filters.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsSelectedFiltersComponent implements OnInit, OnChanges {
  @Input() dataModel!: FilterModel | null;
  @Output() changeEvent: EventEmitter<{ type: string; value: string }> =
    new EventEmitter();

  filters: EnumValueModel[] = [];

  expanded: boolean = true;

  constructor(private translateService: TranslateService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.filters = [];
    if (this.dataModel?.priceFrom) {
      this.filters.push({
        value: 'priceFrom',
        displayName:
          this.translateService.instant('priceFrom') +
          ' ' +
          this.dataModel.priceFrom,
      });
    }
    if (this.dataModel?.priceTo) {
      this.filters.push({
        value: 'priceTo',
        displayName:
          this.translateService.instant('priceTo') +
          ' ' +
          this.dataModel.priceTo,
      });
    }
  }
  ngOnInit(): void {}

  remove(filterValue: string): void {
    this.filters = this.filters.filter((f) => f.value !== filterValue);
  }

  resetFilter(): void {
    // TODO
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
