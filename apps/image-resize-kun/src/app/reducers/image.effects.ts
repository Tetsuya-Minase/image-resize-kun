import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ImageService } from '../components/image/image.service';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
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
      tap((value) => console.log('in readImage', value)),
      ofType(readImage),
      concatMap(({ files }) => this.imageService.readImagesAsDataURL(files)),
      map((response) => readImageSuccess({ readImages: response })),
      catchError(() => of(readImageFailure()))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly imageService: ImageService
  ) {}
}
