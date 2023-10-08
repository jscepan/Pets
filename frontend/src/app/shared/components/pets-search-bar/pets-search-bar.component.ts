import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { PetsSearchBarI } from './pets-search-bar.interface';
import { ViewType } from '../../models/search.model';

@Component({
  selector: 'pets-search-bar',
  templateUrl: './pets-search-bar.component.html',
  styleUrls: ['./pets-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsSearchBarComponent implements OnInit, OnDestroy {
  @Input() dataModel?: PetsSearchBarI;

  @Output() changeEvent: EventEmitter<{ type: string; value: string }> =
    new EventEmitter();

  searchBarForm?: FormGroup;
  searchInput: UntypedFormControl = new UntypedFormControl();

  viewType: ViewType = ViewType.list;
  viewTypeEnum = ViewType;

  constructor() {}

  ngOnInit(): void {
    this.viewType = this.dataModel?.view || ViewType.list;
    this.searchBarForm = new FormGroup({
      pageSize: new FormControl(this.dataModel?.searchText, [
        Validators.required,
      ]),
      pageSort: new FormControl(this.dataModel?.sort.selected, [
        Validators.required,
      ]),
    });
  }

  changePageSize(value: string): void {
    this.changeEvent.emit({ type: 'pageSize', value });
  }

  changeSortBy(value: string): void {
    this.changeEvent.emit({ type: 'sort', value });
  }

  changeView(value: ViewType): void {
    this.viewType = value;
    this.changeEvent.emit({ type: 'viewType', value });
  }

  ngOnDestroy(): void {}
}
