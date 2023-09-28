import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'pets-search-filter',
  templateUrl: './pets-search-filter.component.html',
  styleUrls: ['./pets-search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsSearchFilterComponent implements OnInit, OnDestroy, OnChanges {
  @Input() keyword: string = '';
  @Input() placeholder: string = 'Search for...';
  @Input() debounceTime: number = 500;
  @Input() minCharacters: number = 3;
  @Input() iconHidden: boolean = false;
  @Input() maxWidth: boolean = false;
  @Output() changeEvent: EventEmitter<string> = new EventEmitter();

  searchInput: UntypedFormControl = new UntypedFormControl();

  private inputChangeSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.inputChangeSubscription = this.searchInput.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe(() => {
        if (this.searchInput.value.length === 0) {
          this.changeEvent.emit(this.searchInput.value);
        } else if (this.searchInput.value.length >= this.minCharacters) {
          this.changeEvent.emit(this.searchInput.value);
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.keyword && changes.keyword.previousValue) {
    //   if (changes.keyword.currentValue !== changes.keyword.previousValue) {
    //     // if the change is comming from outside we are not emiting, just setting the value
    //     this.searchInput.setValue(this.keyword, { emitEvent: false });
    //   }
    // }
  }

  resetSearchInputValue(): void {
    this.searchInput.setValue('');
  }

  ngOnDestroy(): void {
    this.inputChangeSubscription.unsubscribe();
  }
}
