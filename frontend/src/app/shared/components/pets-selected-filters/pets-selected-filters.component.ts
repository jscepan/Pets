import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { EnumValueModel } from '../../enums/enum.model';
import { TranslateService } from '@ngx-translate/core';
import { FilterModel } from '../../models/filter.model';

@Component({
  selector: 'pets-selected-filters',
  templateUrl: './pets-selected-filters.component.html',
  styleUrls: ['./pets-selected-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsSelectedFiltersComponent implements OnInit {
  @Input() dataModel!: FilterModel | null;
  @Output() changeEvent: EventEmitter<{ type: string; value: string }> =
    new EventEmitter();

  filters: EnumValueModel[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.filters.push({
      value: 'priceFrom',
      displayName:
        this.translateService.instant('priceFrom') +
        ' ' +
        this.dataModel?.priceFrom,
    });
    this.filters.push({
      value: 'priceTo',
      displayName:
        this.translateService.instant('priceTo') +
        ' ' +
        this.dataModel?.priceTo,
    });
  }

  remove(filterValue: string): void {
    this.filters = this.filters.filter((f) => f.value !== filterValue);
  }
}
