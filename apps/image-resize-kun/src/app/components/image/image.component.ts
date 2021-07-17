import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'image-resize-kun-image',
  templateUrl: 'image.component.html',
})
export class ImageComponent {
  constructor(private readonly imageService: ImageService) {}

  public async onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    await this.imageService.readImageAsUint8Array(inputElement.files);
  }
}
