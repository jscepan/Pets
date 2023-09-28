import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  PetsSweetAlertI,
  PetsSweetAlertTypeEnum,
} from './pets-sweet-alert.interface';

@Component({
  selector: 'pets-sweet-alert',
  templateUrl: './pets-sweet-alert.component.html',
  styleUrls: ['./pets-sweet-alert.component.scss'],
})
export class PetsSweetAlertComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sweetAlertForm') sweetForm!: NgForm;
  @Output() eventOccurs: EventEmitter<{
    eventName: string;
    payload: PetsSweetAlertI;
  }> = new EventEmitter();

  submitButtonDisabled: boolean = false;

  private _statusSubscritpion!: Subscription;

  enabledCheckbox: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: PetsSweetAlertI) {}

  toLowerCase = (str?: string) => {
    return str?.toLowerCase();
  };

  ngAfterViewInit(): void {
    if (this.data.type.name === PetsSweetAlertTypeEnum.input) {
      this._statusSubscritpion = this.sweetForm.form.statusChanges.subscribe(
        (result) => {
          if (result === 'INVALID') {
            this.submitButtonDisabled = true;
          } else {
            this.submitButtonDisabled = false;
          }
        }
      );
    }
  }

  customEvent(eventName: string, payload: PetsSweetAlertI): void {
    this.eventOccurs.emit({ eventName, payload });
  }

  ngOnDestroy(): void {
    if (this._statusSubscritpion) {
      this._statusSubscritpion.unsubscribe();
    }
  }
}
