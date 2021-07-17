import { Component } from '@angular/core';
import { ImageService } from './image.service';
import { Optional } from '../../types/expansion-type';

@Component({
  selector: 'image-resize-kun-image',
  templateUrl: 'image.component.html',
})
export class ImageComponent {
  public imageSrc: Optional<string | ArrayBuffer>;

  constructor(private readonly imageService: ImageService) {}

  public async onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const readImage = await this.imageService.readImageAsUint8Array(
      inputElement.files
    );
    this.imageSrc = readImage[0];
  }
}
