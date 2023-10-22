import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { SearchFilterModel } from '../../models/search.model';
import { ImageModel } from '../../models/image.model';
import { ImageWebService } from 'src/app/web-services/images.web-service';
import { SubscriptionManager } from '../../services/subscription.manager';
import { GlobalService } from '../../services/global.service';
import { MODE } from '../pets-basic-alert/pets-basic-alert.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pets-image-upload',
  templateUrl: './pets-image-upload.component.html',
  styleUrls: ['./pets-image-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ImageWebService],
})
export class PetsImageUploadComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  @Input() dataModel?: SearchFilterModel;
  @Input() maxFileSize: string = '5MB';
  @Input() maxImagesCount: number = 15;

  status: 'initial' | 'uploading' | 'success' | 'fail' = 'initial';
  images: ImageModel[] = [];
  // files: File[] = [];

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  constructor(
    private webService: ImageWebService,
    private globalService: GlobalService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {}

  //////////////////////////////// Uploading of images
  onChange(event: any): void {
    const files = event.target.files;
    if (this.images.length + files.length >= this.maxImagesCount) {
      this.showMaxImagesCountErrorMsg();
      return;
    }
    for (let i = 0; i < files.length; i++) {
      this.uploadImage(files[i]);
    }
  }

  handleFileInput(event: DragEvent): void {
    if (event.type === 'drop') {
      const element = event as DragEvent;
      const files: FileList | undefined = element.dataTransfer?.files;
      if (files) {
        if (this.images.length + files.length >= this.maxImagesCount) {
          this.showMaxImagesCountErrorMsg();
          return;
        }
        for (let i = 0; i < files.length; i++) {
          const fileToUpload = files.item(i);

          if (fileToUpload) {
            this.uploadImage(fileToUpload);
          }
        }
      }
    }
  }

  uploadImage(file: File): void {
    if (this.images.length >= this.maxImagesCount) {
      return;
    }
    this.subs.sink = this.webService.uploadImage(file).subscribe((image) => {
      if (image) {
        this.addNewImage(image);
      }
    });
  }

  showMaxImagesCountErrorMsg(): void {
    this.globalService.showBasicAlert(
      MODE.warning,
      this.translateService.instant('maxImagesCount'),
      this.translateService.instant('maxImagesCountIs', {
        imageCount: this.maxImagesCount,
      })
    );
  }

  //////////////////////////////// Images functions
  addNewImage(image: ImageModel): void {
    if (this.images.length >= this.maxImagesCount) {
      this.showMaxImagesCountErrorMsg();
      return;
    }
    const newImage = { ...image, index: this.images.length };
    this.images.push(newImage);
    this.updateImagesIndexes();
  }

  removeImage(image: ImageModel): void {
    const f = this.images.indexOf(image);
    if (f >= 0) {
      this.images.splice(f, 1);
      this.updateImagesIndexes();
    }
  }

  private updateImagesIndexes(): void {
    const indexes: Map<string, number> = new Map();
    this.images.forEach((image, index) => {
      indexes.set(image.oid, index);
    });
    this.subs.sink = this.webService.updateImageIndexes(indexes).subscribe();
  }

  //////////////////////////////// HELPERS functions
  onDropped(event: DragEvent): void {
    this.handleFileInput(event);
  }

  triggerFileInput() {
    document.getElementById('fileInput')?.click();
  }

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }

  ngOnDestroy(): void {}
}
