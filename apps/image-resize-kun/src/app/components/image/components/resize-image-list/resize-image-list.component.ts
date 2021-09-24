import { Component, Input } from '@angular/core';
import { DisplayImage } from '../../model/DisplayImage';

@Component({
  selector: 'image-resize-kun-resize-image-list',
  templateUrl: 'resize-image-list.component.html',
})
export class ResizeImageListComponent {
  @Input() compareList: DisplayImage[] = [];
}