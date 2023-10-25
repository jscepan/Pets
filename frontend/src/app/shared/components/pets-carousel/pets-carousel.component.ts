import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface CarouselImagesI {
  imageOid: string;
  imageUrl: string;
}

@Component({
  selector: 'pets-carousel',
  templateUrl: './pets-carousel.component.html',
  styleUrls: ['./pets-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsCarouselComponent implements OnInit {
  @Input() dataModel?: CarouselImagesI[];

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
