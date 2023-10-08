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
import { Subscription, debounceTime } from 'rxjs';
import { PetsSearchBarI } from './pets-search-bar.interface';
import { PageSize } from '../../models/search.model';

@Component({
  selector: 'pets-search-bar',
  templateUrl: './pets-search-bar.component.html',
  styleUrls: ['./pets-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsSearchBarComponent implements OnInit, OnDestroy {
  @Input() dataModel?: PetsSearchBarI;

  @Output() changeEvent: EventEmitter<string> = new EventEmitter();

  searchBarForm?: FormGroup;
  pageSizeOptions: PageSize[] = [
    PageSize.TEN,
    PageSize.TWENTY,
    PageSize.FIFTHY,
  ];

  searchInput: UntypedFormControl = new UntypedFormControl();

  constructor() {}

  ngOnInit(): void {
    this.searchBarForm = new FormGroup({
      pageSizeCtrl: new FormControl(this.dataModel?.search?.adPage.pageSize, [
        Validators.required,
      ]),
    });
    this.searchBarForm.valueChanges.subscribe((value) => {
      console.log('CHANGE');
      console.log(value);
    });
  }

  ngOnDestroy(): void {}
}
