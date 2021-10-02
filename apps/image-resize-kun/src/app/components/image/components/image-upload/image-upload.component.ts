import { Component, EventEmitter, Output } from '@angular/core';
import { DisplayImage, ImageState } from '../../../../model/state/image.state';
import { Store } from '@ngrx/store';
import { readImage } from '../../../../actions/image.action';
import { tap } from 'rxjs/operators';
import { InvalidOperationError } from 'apps/image-resize-kun/src/app/model/error/invalid-operation-error';

@Component({
  selector: 'image-resize-kun-image-upload',
  templateUrl: 'image-upload.component.html',
})
export class ImageUploadComponent {
  @Output() event = new EventEmitter<DisplayImage[]>();

  constructor(private readonly store: Store<{ image: ImageState }>) {
    this.store
      .select('image')
      .pipe(tap((value) => console.log('value: ', value)));
  }

  public async onChangeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files === null) {
      throw new InvalidOperationError('error');
    }
    const files = Array.from(inputElement.files);
    this.store.dispatch(readImage({ files }));
    // const inputList = await this.imageService.readImagesAsDataURL(
    //   inputElement.files
    // );
    // const resizedList = await Promise.all(
    //   inputList.map((i) => this.imageService.resizeImage(i, 3))
    // );
    // this.event.emit(this.imageService.margeImageList(inputList, resizedList));
  }
}
