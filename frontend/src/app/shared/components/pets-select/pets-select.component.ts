import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { EnumValueModel } from '../../enums/enum.model';

@Component({
  selector: 'pets-select',
  templateUrl: './pets-select.component.html',
  styleUrls: ['./pets-select.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsSelectComponent implements OnInit {
  @Input() dataModel: EnumValueModel[] = [];
  @Input() label: string = '';
  @Input() multipleSelect?: boolean;
  selectControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
