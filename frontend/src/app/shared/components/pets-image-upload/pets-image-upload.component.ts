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
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pets-image-upload',
  templateUrl: './pets-image-upload.component.html',
  styleUrls: ['./pets-image-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsImageUploadComponent implements OnInit, OnDestroy {
  @Input() dataModel?: SearchFilterModel;
  @Input() maxFileSize: string = '5MB';
  @Input() maxImagesCount: number = 15;

  status: 'initial' | 'uploading' | 'success' | 'fail' = 'initial';
  files: File[] = [];

  @Output() clickEvent: EventEmitter<Event> = new EventEmitter();

  ngOnInit(): void {}

  onChange(event: any): void {
    const files = event.target.files;
    if (files.length) {
      this.files.push(...files);
    }
  }

  triggerFileInput() {
    document.getElementById('fileInput')?.click();
  }

  removeImage(file: File): void {
    const f = this.files.indexOf(file);
    if (f >= 0) {
      this.files.splice(f, 1);
    }
  }

  onDropped(event: DragEvent): void {
    this.handleFileInput(event);
  }

  handleFileInput(event: DragEvent): void {
    if (event.type === 'drop') {
      const element = event as DragEvent;
      const files: FileList | undefined = element.dataTransfer?.files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          const fileToUpload = files.item(i);

          if (fileToUpload) {
            this.files.push(fileToUpload);
          }
        }
      }
    }
  }

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }

  ngOnDestroy(): void {}
}
