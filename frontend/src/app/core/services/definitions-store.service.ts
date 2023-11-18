import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { Language } from 'src/app/shared/enums/language.model';
import { DefinitionModel } from 'src/app/shared/models/definitions.model';
@Injectable({
  providedIn: 'root',
})
export class DefinitionsStoreService {
  // flag that indicates if we have received data from web service
  private readonly _dataLoaded = new BehaviorSubject<boolean>(false);
  readonly dataLoaded$ = this._dataLoaded.asObservable();

  private readonly _definitions = new BehaviorSubject<DefinitionModel | null>(
    null
  );
  readonly definitions$ = this._definitions.asObservable();

  // data loaded methods
  get dataLoaded(): boolean {
    return this._dataLoaded.getValue();
  }

  set dataLoaded(dataLoaded: boolean) {
    this._dataLoaded.next(dataLoaded);
  }

  setDefinitions(definitions: DefinitionModel): void {
    this._definitions.next(definitions);
  }

  getAdsTypes(language: Language): EnumValueModel[] {
    const types = this._definitions.getValue()?.adsType.map((d) => {
      return {
        value: d.value,
        displayName: d.displayValue[language],
      };
    });

    return types ?? [];
  }

  getCategoriesForAdTypes(adTypes: string[]): EnumValueModel[] {
    return [];
  }
}
