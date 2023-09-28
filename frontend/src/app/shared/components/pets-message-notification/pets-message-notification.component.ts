import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'pets-message-notification',
  templateUrl: './pets-message-notification.component.html',
  styleUrls: ['./pets-message-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsMessageNotificationComponent implements OnInit {
  @Input() showNotification: boolean = false;
  @Input() msgCounter?: number;

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
