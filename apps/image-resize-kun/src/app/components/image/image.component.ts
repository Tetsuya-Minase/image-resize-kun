import { Component, OnInit } from '@angular/core';
import { ImageState, ReadImage } from '../../model/state/image.state';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { resizeImage } from '../../actions/image.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'image-resize-kun-image',
  templateUrl: 'image.component.html',
})
export class ImageComponent implements OnInit {
  public readonly readImageList$: Observable<ReadImage[]>;

  constructor(private readonly store: Store<{ image: ImageState }>) {
    this.readImageList$ = this.store.select(
      createSelector(
        createFeatureSelector('image'),
        (state: ImageState) => state.readImage
      )
    );
  }

  public ngOnInit() {
    this.readImageList$.subscribe((r) => {
      r.forEach((i) => {
        this.store.dispatch(resizeImage({ readImage: i, range: 3 }));
      });
    });
  }
}
