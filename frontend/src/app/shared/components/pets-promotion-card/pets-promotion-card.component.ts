import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PromotionModel } from '../../models/promotion.model';
import { getPromotionServices } from '../../utils';

@Component({
  selector: 'pets-promotion-card',
  templateUrl: './pets-promotion-card.component.html',
  styleUrls: ['./pets-promotion-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsPromotionCardComponent implements OnInit {
  getPromotionServices = getPromotionServices;

  @Input() dataModel?: PromotionModel;

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
