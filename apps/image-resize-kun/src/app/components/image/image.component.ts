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
    const inputList = await this.imageService.readImagesAsDataURL(
      inputElement.files
    );
    this.imageList = inputList.map((i) => i.dataUrl);

    const resizedList = await Promise.all(
      inputList.map((i) => this.imageService.resizeImage(i))
    );
    this.resizedImageList = resizedList.map((r) => r.dataUrl);
    console.log(this.resizedImageList);
  }
}
