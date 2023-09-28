import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { EnumValueModel } from '../../enums/enum.model';

@Component({
  selector: 'pets-chips',
  templateUrl: './pets-chips.component.html',
  styleUrls: ['./pets-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsChipsComponent implements OnInit {
  @Input() dataModel: EnumValueModel[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput?: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit
          ? this._filter(fruit).map((item) => item.displayName)
          : this.dataModel.map((item) => item.displayName)
      )
    );
  }

  ngOnInit(): void {
    this.fruits = this.dataModel.map((item) => item.displayName);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Proverite da li je čip već prisutan u nizu
    if (value && !this.fruits.includes(value)) {
      const matchingItem = this.dataModel.find(
        (item) => item.displayName === value
      );
      if (matchingItem) {
        this.fruits.push(value);
      }
    }

    // Clear the input value
    event.chipInput!.clear();
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const matchingItem = this.dataModel.find(
      (item) => item.displayName === event.option.viewValue
    );
    if (matchingItem) {
      const selectedFruit = matchingItem.displayName;

      // Proverite da li je čip već prisutan u nizu
      if (!this.fruits.includes(selectedFruit)) {
        this.fruits.push(selectedFruit);
      }
    }

    if (this.fruitInput) {
      this.fruitInput.nativeElement.value = '';
    }
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): EnumValueModel[] {
    const filterValue = value.toLowerCase();

    return this.dataModel.filter((fruit) =>
      fruit.displayName.toLowerCase().includes(filterValue)
    );
  }

  displayFn(item?: EnumValueModel): string {
    return item ? item.displayName : '';
  }
}
