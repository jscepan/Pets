import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PetsAdCardI } from './pets-ad-card.interface';

export enum ClickType {
  link,
  favorite,
}

@Component({
  selector: 'pets-ad-card',
  templateUrl: './pets-ad-card.component.html',
  styleUrls: ['./pets-ad-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsAdCardComponent implements OnInit {
  @Input() dataModel?: PetsAdCardI;

  @Output() clickEvent: EventEmitter<ClickType> = new EventEmitter();

  clickTypeEnum = ClickType;

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event, type: ClickType): void {
    e.preventDefault();
    this.clickEvent.emit(type);
  }
}
