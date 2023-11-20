import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { EnumValueModel } from '../../enums/enum.model';

@Component({
  selector: 'pets-autocomplete',
  templateUrl: './pets-autocomplete.component.html',
  styleUrls: ['./pets-autocomplete.component.scss'],
})
export class PetsAutocompleteComponent implements OnInit, OnChanges {
  @Input() dataModel: EnumValueModel[] | null | undefined;
  @Input() required: boolean = false;
  @Input() label: string = '';

  states: EnumValueModel[] = [];

  form?: FormGroup;
  filteredStates?: Observable<any[]>;

  showComponent: boolean = true;

  selectedObject: EnumValueModel | undefined; // Dodajte ovo kao svojstvo

  @Output() changeEvent: EventEmitter<EnumValueModel> = new EventEmitter();
  @Output() clearEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.showComponent = false;
    this.form = new FormGroup({
      autoselectCtrl: new FormControl(
        '',
        this.required ? [Validators.required] : []
      ),
    });
    this.filteredStates = this.form?.get('autoselectCtrl')?.valueChanges.pipe(
      startWith(''),
      map((state) =>
        state ? this.filterStates(state) : this.dataModel?.slice() || []
      )
    );

    this.states = this.dataModel || [];
    // setTimeout(() => {
    this.showComponent = true;
    // });
  }

  ngOnInit(): void {}

  filterStates(item: EnumValueModel) {
    return this.dataModel
      ? this.dataModel.filter(
          (state) =>
            state.displayName
              ?.toLowerCase()
              .indexOf(item.displayName?.toLowerCase()) === 0
        )
      : [];
  }

  displayFn(item?: EnumValueModel): string {
    return item ? item.displayName : '';
  }

  onChangeSelectedObject(selectedObject: EnumValueModel) {
    this.selectedObject = selectedObject;
    this.changeEvent.emit(selectedObject); // Emitujte selektovani objekat
  }

  clearText(): void {
    this.form?.get('autoselectCtrl')?.setValue('');
    this.clearEvent.emit(); // Emitujte selektovani objekat
  }
}
