import { createAction, props } from '@ngrx/store';
import { ReadImage, ResizedImage } from '../model/state/image.state';

export const readImage = createAction(
  '[image] readImage',
  props<{ files: ReadonlyArray<File> }>()
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
export const resizeImageSuccess = createAction(
  '[image] resizeImageSuccess',
  props<{ resizedImage: ResizedImage }>()
);
export const resizeImageFailure = createAction('[image] resizeImageFailure');
export const margeImageList = createAction(
  '[image] margeImageList',
  props<{
    resizedImageList: ReadonlyArray<ResizedImage>;
  }>()
);
