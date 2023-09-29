import { DefinitionEntityModel } from './definition-entity.model';

export class DefinitionModel {
  version: string = '';
  countries: DefinitionEntityModel[] = [];
  adsType: DefinitionEntityModel[] = [];
}
