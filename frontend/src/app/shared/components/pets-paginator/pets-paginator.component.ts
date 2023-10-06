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
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'pets-paginator',
  templateUrl: './pets-paginator.component.html',
  styleUrls: ['./pets-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsPaginatorComponent implements OnInit, OnChanges {
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
    if (
      changes['totalPagesCount'] ||
      changes['currentPageCount']
      ) {
      this.setPageNumbers();
    }
  }

  setPageNumbers(): void {
    for (let i = 1; i < (this.totalPagesCount || 1); i++) {
      console.log('idemo sad da postavimo page numbers. Sada smo na i: ' + i);
      if (this.currentPageCount && i < this.currentPageCount) {
        console.log('USLI SMO U IF');
        if (this.showPagesLeft > 0) {
          console.log('IF: this.showPagesLeft>0');
          this.pageNumbers.push(i + '');
          this.showPagesLeft--;
        } else if (
          this.currentPageCount &&
          this.totalPagesCount &&
          this.currentPageCount === this.totalPagesCount &&
          this.showPagesRight > 0
        ) {
          console.log('else if(this.currentPageCount');
          this.pageNumbers.push(i + '');
          this.showPagesRight--;
        }
      } else if (this.currentPageCount && this.currentPageCount === i) {
        console.log('evo ga ELSE IF  broj 1111');
        this.pageNumbers.push(i + '');
      } else if (this.currentPageCount && i > this.currentPageCount) {
        if(this.showPagesLeft>0){
          this.pageNumbers.push(i + '');
          this.showPagesLeft--;
        }else if(this.showPagesRight>0){
          this.pageNumbers.push(i + '');
          this.showPagesRight--;
        }
        console.log('drugo else IF 2222');
      }
    }
  }

  goToPage(value: any): void {
    console.log('clicked:    HEJEJJEHEHEHEHHE');
    console.log(value);
    this.goToPageEvent.emit(value);
  }
}
