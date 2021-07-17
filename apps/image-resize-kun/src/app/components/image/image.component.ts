import { Component } from '@angular/core';
import { ImageService } from './image.service';
import { DisplayImage } from './model/DisplayImage';

@Component({
  selector: 'image-resize-kun-image',
  templateUrl: 'image.component.html',
})
export class ImageComponent {
  public compareList: DisplayImage[] = [];

  constructor(private readonly imageService: ImageService) {}

  public async onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputList = await this.imageService.readImagesAsDataURL(
      inputElement.files
    );
    const resizedList = await Promise.all(
      inputList.map((i) => this.imageService.resizeImage(i))
    );
    this.compareList = this.imageService.margeImageList(inputList, resizedList);
  }
}
