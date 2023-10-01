import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AdModel } from '../../models/ad.model';

@Component({
  selector: 'pets-ad-card',
  templateUrl: './pets-ad-card.component.html',
  styleUrls: ['./pets-ad-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsAdCardComponent implements OnInit {
  @Input() dataModel?: AdModel;

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
