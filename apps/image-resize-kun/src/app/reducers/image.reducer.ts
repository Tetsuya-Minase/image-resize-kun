import { Action, createReducer, on } from '@ngrx/store';
import {
  DisplayImage,
  ImageState,
  initialState,
  ReadImage,
  ResizedImage,
} from '../model/state/image.state';
import { margeImageList, readImageSuccess } from '../actions/image.action';
import { UnexpectedError } from '../model/error/unexpected-error';

/**
 * marge input images and resized images.
 * @param inputImageList input images
 * @param resizedImageList resized images
 */
function margeImages(
  inputImageList: ReadImage[],
  resizedImageList: ResizedImage[]
): DisplayImage[] {
  return inputImageList.map((i): DisplayImage => {
    const resizedImage = resizedImageList.find((r) => i.name === r.name);
    if (resizedImage === undefined) {
      throw new UnexpectedError('resized image is required');
    }
    return {
      name: i.name,
      inputDataUrl: i.dataUrl,
      resizedDataUrl: resizedImage.dataUrl,
    };
  });
}

const _imageReducer = createReducer(
  initialState,
  on(margeImageList, (state) => ({
    ...state,
    displayImage: margeImages(state.readImage, state.resizedImage),
  })),
  on(readImageSuccess, (state, { readImages }) => {
    return { ...state, readImage: [...readImages] };
  })
);

export function ImageReducer(state: ImageState | undefined, action: Action) {
  return _imageReducer(state, action);
}
