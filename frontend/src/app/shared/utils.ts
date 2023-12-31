import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { BASE_API_URL } from './constants';
import { BaseModel } from './models/base-model';
import { EnumValueModel } from './enums/enum.model';

// tslint:disable-next-line:ban-types
declare const gtag: Function;

export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) {
    return 'n/a';
  }

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  if (i === 0) {
    return bytes + ' ' + sizes[i];
  }

  return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

export function getPromotionServices(service: string): string[] {
  return service.split('||');
}

export function constructUrl(
  endpoint: string,
  from?: number,
  to?: number
): string {
  let queryParamsStr: string = '';
  if (from !== undefined && to !== undefined) {
    queryParamsStr = `?skip=${from}&top=${to}`;
  }
  return endpoint + queryParamsStr;
}

export function getFormatedDate(date: string): string {
  return formatDate(date, 'dd/MM/yyyy', 'en-US');
}

export function getOid(_index: number, card: { oid: string }): string {
  return card.oid;
}

export function getUserInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toLocaleUpperCase();
}

export function mapExtensionToIcon(extension?: string): string {
  switch (extension) {
    case '3dm':
      return 'file-threedm';
    case 'docx':
    case 'jpg':
    case 'pdf':
    case 'png':
    case 'xlsx':
      return `file-${extension}`;
    default:
      return 'file-other';
  }
}

export function getDefaultSortOptions(
  translateService: TranslateService
): { key: string; value: string }[] {
  const options = [
    { key: 'newest', value: translateService.instant('newest') },
    { key: 'oldest', value: translateService.instant('oldest') },
    {
      key: 'azAlphabetically',
      value: translateService.instant('azAlphabetically'),
    },
    {
      key: 'zaAlphabetically',
      value: translateService.instant('zaAlphabetically'),
    },
  ];
  return options;
}

export function copyTextToClipboard(inputId: string): Observable<void> {
  return new Observable((subscriber: Observer<void>) => {
    try {
      if (document.queryCommandSupported('copy')) {
        // tslint:disable-next-line:no-any
        const inputElement: any = document.getElementById(inputId);
        inputElement.select();
        inputElement.setSelectionRange(0, 10000);
        document.execCommand('copy');
        subscriber.next();
        subscriber.complete();
      }
    } catch {
      subscriber.error('Copy not supported');
    }
  });
}

export function searchInText(searchText: string, fields: string[]): boolean {
  const searchWords: { word: string; found?: boolean }[] = searchText
    .split(' ')
    .map((st) => {
      return { word: st, found: false };
    });
  fields.forEach((field) => {
    if (field) {
      searchWords.forEach((obj) => {
        if (field.toLowerCase().includes(obj.word)) {
          obj.found = true;
        }
      });
    }
  });
  return searchWords.filter((sw) => sw.found).length === searchWords.length;
}

export function roundOnDigits(
  value: number,
  numberOfDigits: number = 2
): number {
  return (
    Math.round(value * Math.pow(10, numberOfDigits)) /
    Math.pow(10, numberOfDigits)
  );
}

export function getConstructionMeasure(
  input: number,
  minConstructionMeasure: number = 3
): number {
  let value = Math.round(input);
  if (value < input) {
    value++;
  } else if (value === input) {
    value++;
  }
  while (value % minConstructionMeasure !== 0) {
    value++;
  }
  return value;
}

export function calculateTimeForCard(value: string): {
  value: number;
  time: string;
} {
  const curentTime = new Date().getTime(); // Konvertuj trenutni datum u milisekunde
  const betweenMS = curentTime - new Date(value).getTime();
  const seconds = Math.floor(betweenMS / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);

  if (months > 1) {
    return { value: months + 1, time: 'months' };
  } else if (weeks === 4) {
    return { value: 1, time: 'month' };
  } else if (weeks >= 1) {
    return { value: weeks + 1, time: 'weeks' };
  } else if (days >= 1) {
    if (days === 6 && hours > 0) {
      return { value: 1, time: 'week' };
    }
    return { value: days + 1, time: 'days' };
  } else {
    if (hours === 23 && minutes > 0) {
      return { value: 1, time: 'day' };
    }
    return { value: hours + 1, time: hours > 0 ? 'hours' : 'hour' };
  }
}

export function getDaysBetweenTwoDates(first: Date, second: Date): number {
  return (first.getTime() - second.getTime()) / (1000 * 3600 * 24);
}

export function compareByValue(f1: BaseModel, f2: BaseModel) {
  return f1 && f2 && f1.oid === f2.oid;
}

export function getWorkOrderImageUrl(url: string): string {
  return BASE_API_URL + '/images/' + url;
}

export function roundOnIntegerOrMaxTwoDigits(value: number): string {
  if (Number.isInteger(value)) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  } else {
    return roundOnDigits(value, 2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}

export function enumKeysToString(enumObj: any): string[] | null {
  if (!enumObj) {
    return null;
  }
  return Object.keys(enumObj).map((key) => enumObj[key]);
}

export function enumToEnumValueModel(enumObj: any): EnumValueModel[] | null {
  if (!enumObj) {
    return null;
  }
  return Object.keys(enumObj).map((key) => ({
    value: enumObj[key],
    displayName: enumObj[key],
  }));
}

export function enumToEnumKeyModel(enumObj: any): EnumValueModel[] | null {
  if (!enumObj) {
    return null;
  }
  return Object.keys(enumObj).map((key) => ({
    value: enumObj[key],
    displayName: key,
  }));
}

type EnumType<T> = {
  [K in keyof T]: T[K];
};

export function stringToEnumModel<T>(
  values: string[],
  enumObj: EnumType<T>
): Object[] | undefined {
  return values
    .map((value) => getEnumFromKey(value, enumObj))
    .filter((enumValue) => enumValue !== undefined) as Object[];
}

export function getEnumFromKey<T>(
  value: string,
  enumObj: EnumType<T>
): T | undefined {
  const enumValues = Object.values(enumObj) as string[];

  if (enumValues.includes(value)) {
    return value as T;
  }

  return undefined;
}
