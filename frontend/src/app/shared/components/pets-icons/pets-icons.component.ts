import { Component, Input, Inject, OnChanges } from '@angular/core';
import { Icons } from './pets-icon.provider';
import { upperCamelCase } from './pets-icon.utils';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'pets-icons',
  templateUrl: './pets-icons.component.html',
  styleUrls: ['./pets-icons.component.scss'],
})
export class PetsIconsComponent implements OnChanges {
  @Input() name!: string;
  @Input() color?: string = 'inherit';
  @Input() size?: string = '24px';
  svg!: SafeHtml;

  constructor(
    @Inject(Icons) private icons: Icons,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(): void {
    this.applyIcon();
  }

  private applyIcon(): void {
    const icons = Object.assign({}, ...(this.icons as object[]));
    const svg = icons[upperCamelCase(this.name)];

    if (!svg) {
      console.warn(`Icon not found: ${this.name}`);
    }
    this.svg = this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
