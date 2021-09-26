import { Component, EventEmitter, Output } from '@angular/core';
import { ImageService } from '../../image.service';
import { DisplayImage } from '../../model/DisplayImage';

@Component({
  selector: 'image-resize-kun-image-upload',
  templateUrl: 'image-upload.component.html',
})
export class ImageUploadComponent {
  @Output() event = new EventEmitter<DisplayImage[]>();

  constructor(private readonly imageService: ImageService) {}

  public async onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputList = await this.imageService.readImagesAsDataURL(
      inputElement.files
    );
    const resizedList = await Promise.all(
      inputList.map((i) => this.imageService.resizeImage(i, 3))
    );
    this.event.emit(this.imageService.margeImageList(inputList, resizedList));
  }
}
