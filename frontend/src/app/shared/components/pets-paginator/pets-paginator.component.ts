import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'pets-pets-paginator',
  templateUrl: './pets-paginator.component.html',
  styleUrls: ['./pets-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsPaginatorComponent implements OnInit {
  @Input() text: string = '';

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
