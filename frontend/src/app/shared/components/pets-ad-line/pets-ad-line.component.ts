import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'pets-ad-line',
  templateUrl: './pets-ad-line.component.html',
  styleUrls: ['./pets-ad-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsAdLineComponent implements OnInit {
  @Input() text: string = '';

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
