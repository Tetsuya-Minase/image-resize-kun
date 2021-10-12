import { Component } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import {
  DisplayImage,
  ImageState,
  ResizedImage,
} from '../../../../model/state/image.state';
import { Observable } from 'rxjs';
import { margeImageList } from '../../../../actions/image.action';

@Component({
  selector: 'image-resize-kun-resize-image-list',
  templateUrl: 'resize-image-list.component.html',
})
export class ResizeImageListComponent {
  public readonly displayList$: Observable<DisplayImage[]>;
  private readonly resizedImageList$: Observable<ResizedImage[]>;

  constructor(private readonly store: Store<{ image: ImageState }>) {
    this.resizedImageList$ = this.store.select(
      createSelector(
        createFeatureSelector('image'),
        (state: ImageState) => state.resizedImage
      )
    );
    this.resizedImageList$.subscribe((s) => {
      this.store.dispatch(
        margeImageList({
          resizedImageList: s,
        })
      );
    });

    this.displayList$ = this.store.select(
      createSelector(
        createFeatureSelector('image'),
        (state: ImageState) => state.displayImage
      )
    );
  }
}
