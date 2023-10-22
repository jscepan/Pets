import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  CdkDragEnter,
  CdkDropList,
  DragRef,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageModel } from '../../models/image.model';
import { ImageWebService } from 'src/app/web-services/images.web-service';
import { BASE_API_URL, DOMAIN_IMAGES } from '../../constants';

@Component({
  selector: 'pets-drag-drop',
  templateUrl: './pets-drag-drop.component.html',
  styleUrls: ['./pets-drag-drop.component.scss'],
  providers: [ImageWebService],
})
export class PetsDragDropComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  // @ts-ignore
  private target: CdkDropList = null;
  // @ts-ignore
  private targetIndex: number;
  // @ts-ignore
  private source: CdkDropList = null;
  // @ts-ignore
  private sourceIndex: number;
  // @ts-ignore
  private dragRef: DragRef = null;

  // @Input() items: Array<File> = [];
  @Input() items: Array<ImageModel> = [];
  @Output() imageIndexChanged: EventEmitter<void> = new EventEmitter();
  @Output() removeItemEvent: EventEmitter<ImageModel> = new EventEmitter();

  boxWidth = '150px';
  boxHeight = '150px';

  constructor(private webService: ImageWebService) {}

  ngAfterViewInit() {
    const placeholderElement = this.placeholder.element.nativeElement;

    placeholderElement.style.display = 'none';
    // @ts-ignore
    placeholderElement.parentNode.removeChild(placeholderElement);
  }

  removeImage(file: ImageModel): void {
    this.removeItemEvent.emit(file);
  }

  getImageUrl(image: ImageModel): string {
    return `${BASE_API_URL}/${DOMAIN_IMAGES}/${image.oid}`;
  }

  // getSafeImageUrl(image: ImageModel): any {
  //   // const imageUrl = URL.createObjectURL(file);
  //   // return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  //   // this;
  //   console.log('+++++++++++++++++++++++++++++++++image');
  //   console.log(image);
  //   return this.webService.getImage(image.oid).subscribe((data:Blob)=>{
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageSrc = reader.result as string;
  //     };
  //     reader.readAsDataURL(data);

  //   });
  // }

  onDropListDropped() {
    if (!this.target) {
      return;
    }

    const placeholderElement: HTMLElement =
      this.placeholder.element.nativeElement;
    // @ts-ignore
    const placeholderParentElement: HTMLElement =
      placeholderElement.parentElement;

    placeholderElement.style.display = 'none';

    placeholderParentElement.removeChild(placeholderElement);
    placeholderParentElement.appendChild(placeholderElement);
    placeholderParentElement.insertBefore(
      this.source.element.nativeElement,
      placeholderParentElement.children[this.sourceIndex]
    );

    if (this.placeholder._dropListRef.isDragging()) {
      this.placeholder._dropListRef.exit(this.dragRef);
    }

    // @ts-ignore
    this.target = null;
    // @ts-ignore
    this.source = null;
    // @ts-ignore
    this.dragRef = null;

    if (this.sourceIndex !== this.targetIndex) {
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
    }
    this.imageIndexChanged.emit();
  }

  onDropListEntered({ item, container }: CdkDragEnter) {
    if (container == this.placeholder) {
      return;
    }

    const placeholderElement: HTMLElement =
      this.placeholder.element.nativeElement;
    const sourceElement: HTMLElement = item.dropContainer.element.nativeElement;
    const dropElement: HTMLElement = container.element.nativeElement;
    const dragIndex: number = Array.prototype.indexOf.call(
      // @ts-ignore
      dropElement.parentElement.children,
      this.source ? placeholderElement : sourceElement
    );
    const dropIndex: number = Array.prototype.indexOf.call(
      // @ts-ignore
      dropElement.parentElement.children,
      dropElement
    );

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = item.dropContainer;

      placeholderElement.style.width = this.boxWidth + 'px';
      placeholderElement.style.height = this.boxHeight + 40 + 'px';

      // @ts-ignore
      sourceElement.parentElement.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = container;
    this.dragRef = item._dragRef;

    placeholderElement.style.display = '';

    // @ts-ignore
    dropElement.parentElement.insertBefore(
      placeholderElement,
      dropIndex > dragIndex ? dropElement.nextSibling : dropElement
    );

    this.placeholder._dropListRef.enter(
      item._dragRef,
      item.element.nativeElement.offsetLeft,
      item.element.nativeElement.offsetTop
    );
  }
}
