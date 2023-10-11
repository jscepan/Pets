import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { EnumValueModel } from '../../enums/enum.model';

@Component({
  selector: 'pets-autocomplete',
  templateUrl: './pets-autocomplete.component.html',
  styleUrls: ['./pets-autocomplete.component.scss'],
})
export class PetsAutocompleteComponent implements OnInit, OnChanges {
  @Input() dataModel?: EnumValueModel[];
  @Input() label: string = '';
  states: EnumValueModel[] = [];
  stateCtrl: FormControl;
  filteredStates?: Observable<any[]>;

  showComponent: boolean = true;

  selectedObject: EnumValueModel | undefined; // Dodajte ovo kao svojstvo

  @Output() changeEvent: EventEmitter<EnumValueModel> = new EventEmitter();

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) =>
        state ? this.filterStates(state) : this.dataModel?.slice() || []
      )
    );
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.showComponent = false;
    this.states = this.dataModel || [];
    setTimeout(() => {
      this.showComponent = true;
    });
  }

  filterStates(item: EnumValueModel) {
    return this.dataModel
      ? this.dataModel.filter(
          (state) =>
            state.displayName
              .toLowerCase()
              .indexOf(item.displayName.toLowerCase()) === 0
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
}
