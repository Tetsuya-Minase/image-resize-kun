import { Component } from '@angular/core';
import { UnexpectedError } from '../../../../model/error/unexpected-error';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { ImageState, ReadImage } from '../../../../model/state/image.state';
import { Observable } from 'rxjs';
import { resizeImage } from '../../../../actions/image.action';

@Component({
  selector: 'image-resize-kun-resize-range-slider-component',
  templateUrl: 'resize-range-slider.component.html',
})
export class ResizeRangeSliderComponent {
  public readonly RANGE_MAX = 6;
  public readonly RANGE_MIN = 2;
  private readonly readImageList$: Observable<ReadImage[]>;
  private readImageList: ReadImage[] = [];

  constructor(private readonly store: Store<{ image: ImageState }>) {
    this.readImageList$ = this.store.select(
      createSelector(
        createFeatureSelector('image'),
        (state: ImageState) => state.readImage
      )
    );
    this.readImageList$.subscribe((r) => (this.readImageList = r));
  }

  public async onChangeRange(event: Event) {
    if (event.target == null) {
      throw new UnexpectedError('event.target is null.');
    }
    const inputElement = event.target as HTMLInputElement;
    const range = Number.parseInt(inputElement.value, 10);
    if (Number.isNaN(range)) {
      throw new UnexpectedError('range must be numeric.');
    }
    this.readImageList.forEach((r) =>
      this.store.dispatch(resizeImage({ readImage: r, range }))
    );
  }
}
