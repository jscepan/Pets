import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { Language } from 'src/app/shared/enums/language.model';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
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

  getCategoriesForAdTypes(
    adType: DefinitionEntityModel,
    selectedLanguage: Language
  ): EnumValueModel[] {
    return adType.childrens.map((t) => {
      return {
        value: t.value,
        displayName: t.displayValue[selectedLanguage],
      };
    });
  }

  getCategoriesForAdTypesFromEnum(
    adType: string,
    selectedLanguage: Language
  ): EnumValueModel[] {
    const adTypes = this._definitions.getValue()?.adsType;
    const selectedType = adTypes?.filter((a) => a.value === adType)[0];
    if (selectedType && selectedType.childrens) {
      return selectedType.childrens
        .map((t) => {
          return {
            value: t.value,
            displayName: t.displayValue[selectedLanguage],
          };
        })
        .sort((a, b) => a.displayName.localeCompare(b.displayName));
    } else {
      return [];
    }
  }

  getSubcategoriesForCategory(
    selectedAdType: DefinitionEntityModel,
    selectedCategory: string,
    selectedLanguage: Language
  ): EnumValueModel[] {
    const adTypes = selectedAdType?.childrens.filter(
      (x) => x.value === selectedCategory
    );
    const type = adTypes ? adTypes[0] : undefined;
    if (type && type.childrens) {
      return type.childrens
        .map((t) => {
          return {
            value: t.value,
            displayName: t.displayValue[selectedLanguage],
          };
        })
        .sort((a, b) => a.displayName.localeCompare(b.displayName));
    } else {
      return [];
    }
  }
}
