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

  constructor() {}

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

  onChange(event: any): void {
    const files = event.target.files;

    if (files.length) {
      this.status = 'initial';
      this.files = files;
    }
  }

  onUpload() {
    //   if (this.files.length) {
    //     const formData = new FormData();
    //     [...this.files].forEach((file) => {
    //       formData.append("file", file, file.name);
    //     });
    //     const upload$ = this.http.post("https://httpbin.com/post", formData);
    //     this.status = "uploading";
    //     upload$.subscribe({
    //       next: () => {
    //         this.status = "success";
    //       },
    //       error: (error: any) => {
    //         this.status = "fail";
    //         return throwError(() => error);
    //       },
    //     });
    //   }
  }

  onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit(e);
  }
}
