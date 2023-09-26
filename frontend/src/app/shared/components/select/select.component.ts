import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { EnumValueModel } from '../enums/enum.model';

@Component({
  selector: 'pets-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  @Input() dataModel: EnumValueModel[] = [];
  @Input() label: string = '';
  selectControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
