import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { PetsSearchBarI } from './pets-search-bar.interface';

@Component({
  selector: 'pets-search-bar',
  templateUrl: './pets-search-bar.component.html',
  styleUrls: ['./pets-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsSearchBarComponent implements OnInit, OnDestroy {
  @Input() dataModel?: PetsSearchBarI;

  @Output() changeEvent: EventEmitter<string> = new EventEmitter();

  searchInput: UntypedFormControl = new UntypedFormControl();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
