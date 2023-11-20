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
  @Input() currentPageCount: number = 0;
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
    this.pageNumbers = [];
    if (this.totalPagesCount && this.totalPagesCount > 0) {
      if (this.totalPagesCount && this.totalPagesCount < 10) {
        for (let i = 0; i < (this.totalPagesCount - 1 || 0); i++) {
          this.pageNumbers.push(i + '');
        }
      } else {
        let leftToAdd = 6;
        this.pageNumbers.push(this.currentPageCount.toString());
        let lastLeftIndex = this.currentPageCount - 1;
        let lastRightIndex = this.currentPageCount + 1;

        while (leftToAdd > 0) {
          // add left
          if (leftToAdd > 0 && lastLeftIndex >= 0) {
            this.pageNumbers.unshift(lastLeftIndex.toString());
            lastLeftIndex--;
            leftToAdd--;
          }
          // add right
          if (leftToAdd > 0 && lastRightIndex < this.totalPagesCount) {
            this.pageNumbers.push(lastRightIndex.toString());
            lastRightIndex++;
            leftToAdd--;
          }
        }

        if (lastLeftIndex === 0) {
          this.pageNumbers.unshift('0');
        } else if (lastLeftIndex === 1) {
          this.pageNumbers.unshift('1');
          this.pageNumbers.unshift('0');
        } else if (lastLeftIndex > 1) {
          this.pageNumbers.unshift('...');
          this.pageNumbers.unshift('0');
        }

        if (lastRightIndex === this.totalPagesCount - 1) {
          this.pageNumbers.push((this.totalPagesCount - 1).toString());
        } else if (lastRightIndex === this.totalPagesCount - 2) {
          this.pageNumbers.push((this.totalPagesCount - 2).toString());
          this.pageNumbers.push((this.totalPagesCount - 1).toString());
        } else if (lastRightIndex < this.totalPagesCount - 2) {
          this.pageNumbers.push('...');
          this.pageNumbers.push((this.totalPagesCount - 1).toString());
        }
      }
    }
  }

  goToPage(value: number): void {
    if (
      value != this.currentPageCount &&
      value >= 0 &&
      this.totalPagesCount &&
      value <= this.totalPagesCount - 1
    ) {
      this.goToPageEvent.emit(value);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPageCount && this.currentPageCount > 0) {
      this.goToPageEvent.emit(this.currentPageCount - 1);
    }
  }

  goToNextPage(): void {
    if (
      this.totalPagesCount &&
      this.currentPageCount + 1 < this.totalPagesCount
    ) {
      this.goToPageEvent.emit(this.currentPageCount + 1);
    }
  }

  ngOnDestroy(): void {}
}
