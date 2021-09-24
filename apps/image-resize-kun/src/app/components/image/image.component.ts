import { Component } from '@angular/core';
import { DisplayImage } from './model/DisplayImage';

@Component({
  selector: 'image-resize-kun-image',
  templateUrl: 'image.component.html',
})
export class ImageComponent {
  public compareList: DisplayImage[] = [];

  public uploadImage(uploadedImage: DisplayImage[]) {
    this.compareList = uploadedImage;
  }
}
