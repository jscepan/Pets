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
  @Input() dataModel: CarouselImagesI[] = [];

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.dataModel.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.dataModel.length) % this.dataModel.length;
  }

  selectImage(index: number): void {
    if (index !== this.currentIndex) {
      this.currentIndex = index;
    }
  }
}
