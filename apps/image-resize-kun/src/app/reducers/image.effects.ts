import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ImageService } from '../components/image/image.service';
import { catchError, concatMap, map } from 'rxjs/operators';
import {
  readImage,
  readImageFailure,
  readImageSuccess,
} from '../actions/image.action';
import { of } from 'rxjs';

@Injectable()
export class ImageEffects {
  public readonly readImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readImage),
      concatMap(({ file }) =>
        this.imageService.readImagesAsDataURL(file).pipe(
          map((response) => readImageSuccess({ readImages: response })),
          catchError(() => of(readImageFailure()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly imageService: ImageService
  ) {}
}
