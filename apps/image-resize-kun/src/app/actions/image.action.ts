import { createAction, props } from '@ngrx/store';
import { ReadImage, ResizedImage } from '../model/state/image.state';
import { Nullable } from '../types/expansion-type';

export const readImage = createAction(
  '[image] readImage',
  props<{ file: Nullable<FileList> }>()
);
export const readImageSuccess = createAction(
  '[image] readImageSuccess',
  props<{ readImages: ReadonlyArray<ReadImage> }>()
);
export const readImageFailure = createAction('[image] readImageFailure');
export const resizeImage = createAction(
  '[image] resizeImage',
  props<{ readImage: ReadImage; range: number }>()
);
export const margeImageList = createAction(
  '[image] margeImageList',
  props<{
    inputImageList: ReadonlyArray<ReadImage>;
    resizedImageList: ReadonlyArray<ResizedImage>;
  }>()
);
