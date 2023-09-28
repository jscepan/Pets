import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  BasicAlertI,
  MODE,
} from '../components/basic-alert/basic-alert.interface';
import { BasicAlertService } from '../components/basic-alert/basic-alert.service';
import {
  PetsSweetAlertI,
  PetsSweetAlertTypeEnum,
} from '../components/pets-sweet-alert/pets-sweet-alert.interface';
import { PetsSweetAlertService } from '../components/pets-sweet-alert/pets-sweet-alert.service';
import { ErrorResponseI } from './error-response.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private readonly _loaderComponent = new BehaviorSubject<boolean>(false);

  constructor(
    private basicAlertService: BasicAlertService,
    private sweetAlertService: PetsSweetAlertService,
    private translateService: TranslateService
  ) {}

  activateLoader(): void {
    this._loaderComponent.next(true);
  }

  deactivateLoader(): void {
    this._loaderComponent.next(false);
  }

  // -- BASIC ALERT: general usage
  showBasicAlert(mode: MODE, title: string, content: string): void {
    const basicAlertData: BasicAlertI = {
      mode,
      title,
      content,
    };

    this.basicAlertService.openBasicAlert(basicAlertData);
  }

  // BASIC ALERT: default error handling
  showBasicAlertDefaultError(error: ErrorResponseI): void {
    this.showBasicAlert(
      MODE.error,
      this.translateService.instant('error'),
      error.error.message
    );
  }

  // BASIC ALERT: vast usage empty file error
  showBasicAlertEmptyFile(): void {
    this.showBasicAlert(
      MODE.error,
      this.translateService.instant('emptyDocument'),
      this.translateService.instant('noFile')
    );
  }

  // -- SWEET ALERT: general usage of ALERT
  showAlert(title: string, message: string, okBtn?: string): void {
    this.sweetAlertService.openMeSweetAlert({
      title,
      message,
      mode: 'warning',
      type: {
        name: PetsSweetAlertTypeEnum.alert,
        buttons: {
          ok: okBtn || this.translateService.instant('ok'),
        },
      },
    });
  }

  // -- SWEET ALERT: generic alert
  showAlertDialog(
    model: PetsSweetAlertI
  ): Observable<PetsSweetAlertI | undefined> {
    const alertId: string = model.id || uuidv4();
    model.id = alertId;
    this.sweetAlertService.openMeSweetAlert(model);
    return this.sweetAlertService.getDataBackFromSweetAlert().pipe(
      filter((data: PetsSweetAlertI) => {
        return data.id === alertId;
      })
    );
  }

  // -- SWEET ALERT: general usage of CONFIRM
  showConfirmAlert(
    title: string,
    message: string,
    warning: boolean = false,
    cancelBtn?: string,
    confirmBtn?: string
  ): Observable<PetsSweetAlertI | undefined> {
    return this.showAlertDialog({
      icon: warning ? 'alert-triangle' : 'alert-octagon',
      title,
      message,
      mode: warning ? 'warning' : 'danger',
      type: {
        name: PetsSweetAlertTypeEnum.confirm,
        buttons: {
          cancel: cancelBtn || this.translateService.instant('cancel'),
          confirm: confirmBtn || this.translateService.instant('confirm'),
        },
      },
    });
  }

  // -- SWEET ALERT: general usage of SUBMIT
  showSubmitAlert(
    title: string,
    message: string,
    warning: boolean = false,
    cancelBtn?: string,
    submitBtn?: string
  ): Observable<PetsSweetAlertI | undefined> {
    return this.showAlertDialog({
      icon: warning ? 'alert-triangle' : 'alert-octagon',
      title,
      message,
      mode: warning ? 'warning' : 'danger',
      type: {
        name: PetsSweetAlertTypeEnum.submit,
        buttons: {
          cancel: cancelBtn || this.translateService.instant('cancel'),
          submit: submitBtn || this.translateService.instant('delete'),
        },
      },
    });
  }

  // -- SWEET ALERT: general usage of PROMPT
  showPromptAlert(
    title: string,
    message: string,
    userInput?: string,
    checkForError?: {
      errorCompareString?: string;
      errorMsg?: string;
    },
    cancelBtn?: string,
    saveBtn?: string
  ): Observable<PetsSweetAlertI | undefined> {
    return this.showAlertDialog({
      title,
      message,
      userInput,
      mode: 'warning',
      type: {
        name: PetsSweetAlertTypeEnum.prompt,
        error: {
          compareString: checkForError?.errorCompareString || '',
          msg: checkForError?.errorMsg || '',
        },
        buttons: {
          cancel: cancelBtn || this.translateService.instant('cancel'),
          submit: saveBtn || this.translateService.instant('save'),
        },
      },
    });
  }
}
