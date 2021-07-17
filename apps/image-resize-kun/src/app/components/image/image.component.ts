import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'image-resize-kun-image',
  templateUrl: 'image.component.html',
})
export class ImageComponent {
  public imageList: Array<string | ArrayBuffer> = [];
  public resizedImageList: Array<string> = [];

  constructor(private readonly imageService: ImageService) {}

  public async onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.imageList = await this.imageService.readImagesAsDataURL(
      inputElement.files
    );
    const resizedImage = await this.imageService.resizeImages(
      this.imageList[0]
    );
    this.resizedImageList.push(resizedImage);
  }
}
