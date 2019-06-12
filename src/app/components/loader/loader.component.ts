import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  template: `<div class="preloader" *ngIf="show"></div>`,
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent {
  @Input() show: boolean;
}
