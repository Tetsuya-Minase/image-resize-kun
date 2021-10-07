import { Component, EventEmitter, Output } from '@angular/core';
import { DisplayImage, ImageState } from '../../../../model/state/image.state';
import { Store } from '@ngrx/store';
import { readImage } from '../../../../actions/image.action';
import { InvalidOperationError } from '../../../../model/error/invalid-operation-error';

@Component({
  selector: 'image-resize-kun-image-upload',
  templateUrl: 'image-upload.component.html',
})
export class ImageUploadComponent {
  @Output() event = new EventEmitter<DisplayImage[]>();

  constructor(private readonly store: Store<{ image: ImageState }>) {
    this.store.select('image');
  }

  public async onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files === null) {
      throw new InvalidOperationError('error');
    }
    const files = Array.from(inputElement.files);
    this.store.dispatch(readImage({ files }));
  }
}
