import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';
@Directive({
  standalone: true,
  selector: '[petsDragDrop]',
})
export class PetsDragDropDirective {
  @Output() fileDropped = new EventEmitter<DragEvent>();
  @HostBinding('class.dragover') dragover: boolean = false;

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragover = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(
    event: DragEvent
  ): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragover = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragover = false;

    this.fileDropped.emit(event);
  }
}
