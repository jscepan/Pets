import {
  // ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
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
  @Input() preSelectedValues?: EnumValueModel[] = [];
  @Input() label: string = '';
  @Input() multipleSelect?: boolean;
  @Input() fullWidth?: boolean;

  @Output() selectedValuesChange?: EventEmitter<EnumValueModel[]> =
    new EventEmitter();

  selectControl?: FormControl;
  allOptions: EnumValueModel[] = [];
  selectedOptions: EnumValueModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.selectControl = new FormControl(this.preSelectedValues);
  }

  selectChange(): void {
    // this.selectedValuesChange?.emit(this.se);
  }
}
