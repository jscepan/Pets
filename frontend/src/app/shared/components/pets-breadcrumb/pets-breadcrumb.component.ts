import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'pets-breadcrumb',
  templateUrl: './pets-breadcrumb.component.html',
  styleUrls: ['./pets-breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsBreadcrumbComponent implements OnInit {
  @Input() text: string = '';

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
