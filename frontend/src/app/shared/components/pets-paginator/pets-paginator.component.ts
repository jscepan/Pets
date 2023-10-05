import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'pets-paginator',
  templateUrl: './pets-paginator.component.html',
  styleUrls: ['./pets-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsPaginatorComponent implements OnInit {
  @Input() totalPagesCount: number | undefined | null;
  @Input() currentPageCount: number | undefined | null;
  showPagesLeft: number = 2;
  showPagesRight: number = 2;
  pageNumbers: number[] = [];

  inputPageNumber: UntypedFormControl = new UntypedFormControl();

  @Output() goToPageEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  goToPage(value: number): void {
    this.goToPageEvent.emit(value);
  }
}
