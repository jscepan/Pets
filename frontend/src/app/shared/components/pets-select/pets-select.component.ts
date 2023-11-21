import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { EnumValueModel } from '../../enums/enum.model';

@Component({
  selector: 'pets-select',
  templateUrl: './pets-select.component.html',
  styleUrls: ['./pets-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PetsSelectComponent),
      multi: true,
    },
  ],
})
export class PetsSelectComponent implements ControlValueAccessor, OnInit {
  @Input() dataModel: EnumValueModel[] = [];
  @Input() label: string = '';
  @Input() multipleSelect?: boolean;
  @Input() fullWidth?: boolean;
  @Input() width?: string;

  @Input() name!: string;

  public formControl: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.formControl.patchValue(value);
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }

  registerOnTouched(fn: any): void {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }
}
