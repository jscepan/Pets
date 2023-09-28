import { TemplateRef } from '@angular/core';
export enum PetsSweetAlertTypeEnum {
  input = 'input',
  prompt = 'prompt',
  confirm = 'confirm',
  submit = 'submit',
  custom = 'custom',
  alert = 'alert',
  copy = 'copy',
  confirmCheckbox = 'confirmCheckbox',
}

type PetsSweetAlertTypeInput = {
  name: PetsSweetAlertTypeEnum.input;
  buttons: {
    submit: string;
  };
};

type PetsSweetAlertTypeAlert = {
  name: PetsSweetAlertTypeEnum.alert;
  buttons: {
    ok: string;
  };
};

type PetsSweetAlertTypePrompt = {
  name: PetsSweetAlertTypeEnum.prompt;
  error?: {
    msg: string;
    compareString: string;
  };
  buttons: {
    cancel: string;
    submit: string;
  };
};

type PetsSweetAlertTypeConfirm = {
  name: PetsSweetAlertTypeEnum.confirm;
  buttons: {
    cancel?: string;
    confirm: string;
  };
};
type PetsSweetAlertTypeSubmit = {
  name: PetsSweetAlertTypeEnum.submit;
  buttons: {
    submit: string;
    cancel: string;
  };
};
type PetsSweetAlertTypeCopy = {
  name: PetsSweetAlertTypeEnum.copy;
  buttons: {
    cancel: string;
    copy: string;
  };
};
type PetsSweetAlertTypeCustom = {
  name: PetsSweetAlertTypeEnum.custom;
  customTemplate: TemplateRef<unknown>;
};
type PetsSweetAlertTypeConfirmCheckbox = {
  name: PetsSweetAlertTypeEnum.confirmCheckbox;
  checkbox: string;
  buttons: {
    cancel: string;
    submit: string;
  };
};
export interface PetsSweetAlertI {
  id?: string;
  mode: 'primary' | 'success' | 'warning' | 'danger';
  type:
    | PetsSweetAlertTypeInput
    | PetsSweetAlertTypeAlert
    | PetsSweetAlertTypePrompt
    | PetsSweetAlertTypeSubmit
    | PetsSweetAlertTypeConfirm
    | PetsSweetAlertTypeCopy
    | PetsSweetAlertTypeCustom
    | PetsSweetAlertTypeConfirmCheckbox;
  icon?: string;
  title: string;
  message: string;
  userInput?: string;
  maxLength?: number;
  inputLabel?: string;
  confirmed?: boolean;
}
