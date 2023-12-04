import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pets-user-initials',
  templateUrl: './pets-user-initials.component.html',
  styleUrls: ['./pets-user-initials.component.scss'],
})
export class PetsUserInitialsComponent implements OnInit {
  @Input() size: 'large' | 'medium' | 'small' | 'extra-small' = 'medium';
  @Input() shape: 'squared' | 'rounded' | 'circled' = 'rounded';
  @Input() initials: string = '';
  @Input() colorIsPrimary: boolean = false;

  randomColor = ['primary', 'success', 'danger', 'warning', 'info'];
  randomItem = 0;

  constructor() {}

  ngOnInit(): void {
    this.randomItem = this.colorIsPrimary
      ? 0
      : Math.floor(Math.random() * this.randomColor.length);
  }
}
