import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
}
