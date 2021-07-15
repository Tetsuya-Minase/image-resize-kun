import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'image-resize-kun-image',
  templateUrl: 'image.component.html',
})
export class ImageComponent {
  constructor(private readonly imageService: ImageService) {}

  onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement);
    this.imageService.readImage(inputElement.files);
  }
}
