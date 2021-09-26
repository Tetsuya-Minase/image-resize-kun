import { Component } from '@angular/core';
import { DisplayImage } from '../../model/state/image.state';

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
