import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PageSize, SearchFilterModel } from '../../models/search.model';
import { PAGE_SIZE } from '../../constants';
import { EnumValueModel } from '../../enums/enum.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pets-filters',
  templateUrl: './pets-filters.component.html',
  styleUrls: ['./pets-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsFiltersComponent implements OnInit {
  @Input() dataModel?: SearchFilterModel;

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  pageSizeOptions: PageSize[] = [
    PageSize.TEN,
    PageSize.TWENTY,
    PageSize.FIFTHY,
  ];

  searchBarForm?: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.searchBarForm = new FormGroup({
      pageSizeCtrl: new FormControl(this.dataModel?.adPage.pageSize, [
        Validators.required,
      ]),
    });
    this.searchBarForm.valueChanges.subscribe((value) => {
      console.log('CHANGE');
      console.log(value);
    });
  }

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
