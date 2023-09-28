import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import {
  PetsBasicAlertEventsTypes,
  PetsBasicAlertI,
} from './pets-basic-alert.interface';

@Component({
  selector: 'pets-basic-alert',
  templateUrl: './pets-basic-alert.component.html',
  styleUrls: ['./pets-basic-alert.component.scss'],
})
export class PetsBasicAlertComponent implements OnDestroy {
  @Output() eventOccurs: EventEmitter<{ eventName: string }> =
    new EventEmitter();

  readonly EVENT_TYPES = PetsBasicAlertEventsTypes;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: PetsBasicAlertI) {}

  customEvent(eventName: string): void {
    this.eventOccurs.emit({ eventName });
  }

  ngOnDestroy(): void {}
}
