import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ImageService } from '../components/image/image.service';
import { catchError, concatMap, map } from 'rxjs/operators';
import {
  readImage,
  readImageFailure,
  readImageSuccess,
  resizeImage,
  resizeImageFailure,
  resizeImageSuccess,
} from '../actions/image.action';
import { of } from 'rxjs';

@Injectable()
export class ImageEffects {
  public readonly readImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readImage),
      concatMap(({ files }) => this.imageService.readImagesAsDataURL(files)),
      map((response) => readImageSuccess({ readImages: response })),
      catchError(() => of(readImageFailure()))
    )
  );
  public readonly resizeImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resizeImage),
      concatMap(({ readImage, range }) =>
        this.imageService.resizeImage(readImage, range)
      ),
      map((response) => resizeImageSuccess({ resizedImage: response })),
      catchError(() => of(resizeImageFailure()))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly imageService: ImageService
  ) {}
}
