interface _DisplayImage {
  name: string;
  inputDataUrl: string;
  resizedDataUrl: string;
}

export type DisplayImage = Readonly<_DisplayImage>;
