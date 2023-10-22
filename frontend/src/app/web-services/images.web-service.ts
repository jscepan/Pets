import { Injectable } from '@angular/core';
import { BaseWebService } from '../core/services/base.web-service';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { BASE_API_URL, DOMAIN_IMAGES } from '../shared/constants';
import { ImageModel } from '../shared/models/image.model';
import { Observable } from 'rxjs';

@Injectable()
export class ImageWebService extends EntityBaseWebService<ImageModel> {
  constructor(public override baseWebService: BaseWebService) {
    super(baseWebService, ImageModel, DOMAIN_IMAGES);
  }

  uploadImage(file: File): Observable<ImageModel> {
    const formData = new FormData();
    formData.append('file', file);

    return this.baseWebService.postRequest<ImageModel, FormData>(
      `${BASE_API_URL + '/' + this.domainName + '/upload'}`,
      formData
    );
  }

  updateImageIndexes(indexes: Map<string, number>): Observable<void> {
    return this.baseWebService.postRequest<void, Map<string, number>>(
      `${BASE_API_URL + '/' + this.domainName + '/indexes'}`,
      indexes
    );
  }
}
