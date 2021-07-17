interface _ReadImage {
  name: string;
  dataUrl: string;
  width: number;
  height: number;
}

export type ReadImage = Readonly<_ReadImage>;
