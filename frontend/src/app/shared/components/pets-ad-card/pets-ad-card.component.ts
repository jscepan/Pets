import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PetsAdCardI } from './pets-ad-card.interface';

@Component({
  selector: 'pets-ad-card',
  templateUrl: './pets-ad-card.component.html',
  styleUrls: ['./pets-ad-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsAdCardComponent implements OnInit {
  @Input() dataModel?: PetsAdCardI;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit();
  }
}
