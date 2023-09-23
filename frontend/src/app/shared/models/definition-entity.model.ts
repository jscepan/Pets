import { Type } from 'class-transformer';
import { DisplayValueModel } from './display-value.model';

export class DefinitionEntityModel {
  value: string = '';
  @Type(() => DisplayValueModel)
  displayValue: DisplayValueModel = new DisplayValueModel();
  childrens: DefinitionEntityModel[] = [];
}
