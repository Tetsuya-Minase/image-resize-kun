import { Component, Input } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { DisplayImage, ImageState } from '../../../../model/state/image.state';
import { Observable } from 'rxjs';
import { margeImageList } from '../../../../actions/image.action';

@Component({
  selector: 'image-resize-kun-resize-image-list',
  templateUrl: 'resize-image-list.component.html',
})
export class ResizeImageListComponent {
  @Input() compareList: DisplayImage[] = [];
  public readonly displayList$: Observable<DisplayImage[]>;

  constructor(private readonly store: Store<{ image: ImageState }>) {
    this.store
      .select(
        createSelector(
          createFeatureSelector('image'),
          (state: ImageState) => state.resizedImage
        )
      )
      .subscribe((s) => {
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
