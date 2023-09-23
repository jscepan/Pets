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
  templateUrl: './ad-line.component.html',
  styleUrls: ['./ad-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdLineComponent implements OnInit {
  @Input() text: string = '';

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
