import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

type PalleteOptions =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning'
  | 'link'
  | 'context-menu'
  | 'link-red'
  | 'link-white';

@Component({
  selector: 'pets-button',
  templateUrl: './pets-button.component.html',
  styleUrls: ['./pets-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() iconName?: string;
  @Input() iconPosition?: 'left' | 'right' = 'left';
  @Input() smallWidth: boolean = false;
  @Input() stopPropagination: boolean = false;

  // at this moment there are 2 icn set in use, one created by design team, another one by feature lib
  // this condition need to be deleted as soon as they will fully switch to ours
  @Input() isFeatherIcon?: boolean = true; // is mainly in use

  @Input() disabled: boolean = false;
  @Input() isTransparentMode: boolean = false; // this is not the same as disabled, this is 1 of 2 styling theme modes
  @Input() fullWidth: boolean = false; // Case when button have to take full width of me-button container
  @Input() fullHeight: boolean = false; // Case when button have to take full height of me-button container
  @Input() color: PalleteOptions = 'primary';

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    if (this.stopPropagination) {
      e.stopPropagation();
    }
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
