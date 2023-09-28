import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PetsMenuItemI } from './pets-menu-item.interface';

@Component({
  selector: 'pets-menu',
  templateUrl: './pets-menu.component.html',
  styleUrls: ['./pets-menu.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsMenuComponent implements OnInit {
  @Input() dataModel?: PetsMenuItemI;

  @Output() clickEvent: EventEmitter<PetsMenuItemI> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  menuItemClicked(item: PetsMenuItemI): void {
    this.clickEvent.emit(item);
  }

}
