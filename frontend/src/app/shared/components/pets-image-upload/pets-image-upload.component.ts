import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SearchFilterModel } from '../../models/search.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'pets-image-upload',
  templateUrl: './pets-image-upload.component.html',
  styleUrls: ['./pets-image-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsImageUploadComponent implements OnInit {
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

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
