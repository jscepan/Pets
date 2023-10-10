import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SearchFilterModel } from '../../models/search.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

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

  searchBarForm?: FormGroup;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.searchBarForm = new FormGroup({
      pageSizeCtrl: new FormControl(this.dataModel?.adPage.pageSize, [
        Validators.required,
      ]),
    });
    this.searchBarForm.valueChanges.subscribe((value) => {
      console.log('CHANGE');
      console.log(value);
    });

    // // disable drag & drop files on page, except on element that has a css class 'droparea'
    // window.addEventListener('dragover', this.disableHandleEvent, false);
    // window.addEventListener('drop', this.disableHandleEvent, false);
  }

  getSafeImageUrl(file: File): SafeUrl {
    const imageUrl = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  onChange(event: any): void {
    const files = event.target.files;
    if (files.length) {
      this.files.push(...files); // Dodaj nove datoteke u postojeći niz
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

  // onDropped(event: DragEvent): void {
  //   this.handleFileInput(event);
  // }

  // private disableHandleEvent(event: Event): boolean | void {
  //   const element = event.target as HTMLElement;
  //   return (
  //     !element.classList.contains('droparea') && event && event.preventDefault()
  //   );
  // }

  drop(event: CdkDragDrop<File[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // handleFileInput(event: DragEvent): void {
  //   if (event.type === 'change') {
  //     console.log('change');
  //     const element = event.currentTarget as HTMLInputElement;
  //     const files: FileList | null = element.files;
  //     if (files) {
  //       console.log('aaa');
  //       console.log(files.item(0));
  //       // if (this.uploadData.fileName) {
  //       //   this.fileToUpload = null;
  //       // }
  //       // this.fileToUpload = files.item(0);
  //       // if (this.fileToUpload) {
  //       //   this.returnFormData.emit(this.fileToUpload);
  //       // }
  //     }
  //   } else if (event.type === 'drop') {
  //     console.log('dropdropdrop');
  //     const element = event as DragEvent;
  //     const files: FileList | undefined = element.dataTransfer?.files;
  //     if (files) {
  //       for (let i = 0; i < files.length; i++) {
  //         const fileToUpload = files.item(i);

  //         if (fileToUpload) {
  //           this.files.push(fileToUpload);
  //         }
  //       }
  //     }
  //   }
  // }

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }

  ngOnDestroy(): void {
    // window.removeEventListener('dragover', this.disableHandleEvent, false);
    // window.removeEventListener('drop', this.disableHandleEvent, false);
  }
}
