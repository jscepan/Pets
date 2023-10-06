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

@Component({
  selector: 'pets-paginator',
  templateUrl: './pets-paginator.component.html',
  styleUrls: ['./pets-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsPaginatorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() totalPagesCount: number | undefined | null;
  @Input() currentPageCount: number | undefined | null;
  showPagesLeft: number = 2;
  showPagesRight: number = 2;
  pageNumbers: string[] = [];

  inputPageNumber: UntypedFormControl = new UntypedFormControl();

  @Output() goToPageEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.setPageNumbers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalPagesCount'] || changes['currentPageCount']) {
      this.setPageNumbers();
    }
  }

  setPageNumbers(): void {
    if (this.totalPagesCount && this.totalPagesCount > 0) {
      if (this.totalPagesCount && this.totalPagesCount < 10) {
        for (let i = 1; i < (this.totalPagesCount || 1); i++) {
          this.pageNumbers.push(i + '');
        }
      } else {
        let leftToAdd = 6;
        if (this.currentPageCount && this.currentPageCount < 6) {
          for (let i = 1; i <= this.currentPageCount; i++) {
            this.pageNumbers.push(i + '');
            leftToAdd--;
          }
          for (
            let i = this.currentPageCount + 1;
            i <= this.totalPagesCount;
            i++
          ) {
            if (leftToAdd === 0) {
              break;
            }
            this.pageNumbers.push(i + '');
            leftToAdd--;
          }
          this.pageNumbers.push('...');
          this.pageNumbers.push(this.totalPagesCount + '');
        } else {
          this.pageNumbers.push('1');
          this.pageNumbers.push('...');
        }
      }
    }
  }

  goToPage(value: number): void {
    if (
      value != this.currentPageCount &&
      value > 0 &&
      this.totalPagesCount &&
      value <= this.totalPagesCount
    ) {
      this.goToPageEvent.emit(value);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPageCount && this.currentPageCount - 1 > 0) {
      this.goToPageEvent.emit(this.currentPageCount - 1);
    }
  }

  goToNextPage(): void {
    if (
      this.currentPageCount &&
      this.totalPagesCount &&
      this.currentPageCount + 1 > this.totalPagesCount
    ) {
      this.goToPageEvent.emit(this.currentPageCount + 1);
    }
  }

  ngOnDestroy(): void {}
}
