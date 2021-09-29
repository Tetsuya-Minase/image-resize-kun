interface _DisplayImage {
  name: string;
  inputDataUrl: string;
  resizedDataUrl: string;
}

export type DisplayImage = Readonly<_DisplayImage>;

interface _ReadImage {
  name: string;
  dataUrl: string;
  width: number;
  height: number;
}

export type ReadImage = Readonly<_ReadImage>;

interface _ResizedImage {
  name: string;
  dataUrl: string;
}

export type ResizedImage = Readonly<_ResizedImage>;

export interface ImageState {
  displayImage: DisplayImage[];
  readImage: ReadImage[];
  resizedImage: ResizedImage[];
}

export const initialState: ImageState = {
  displayImage: [],
  readImage: [],
  resizedImage: [],
};
