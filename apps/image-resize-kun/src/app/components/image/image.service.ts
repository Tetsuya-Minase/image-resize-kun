import { Injectable } from '@angular/core';
import { Nullable } from '../../types/expansion-type';
import { InvalidOperationError } from '../../model/error/invalid-operation-error';
import { UnexpectedError } from '../../model/error/unexpected-error';
import { ReadImage } from './model/ReadImage';
import { ResizedImage } from './model/ResizedImage';

@Injectable()
export class ImageService {
  public async readImagesAsDataURL(
    files: Nullable<FileList>
  ): Promise<Array<ReadImage>> {
    if (files === null) {
      throw new InvalidOperationError('upload files are required.');
    }
    const convertingImage = Array.from(files).map(
      (f): Promise<ReadImage> =>
        new Promise((resolve, reject) => {
          const readImage = new Image();
          const reader = new FileReader();
          reader.addEventListener(
            'load',
            (event: ProgressEvent<FileReader>) => {
              if (typeof event.target?.result !== 'string') {
                reject(new UnexpectedError(`fail to read image file.`));
                return;
              }
              readImage.src = event.target.result;
              readImage.onload = () => {
                if (typeof event.target?.result !== 'string') {
                  reject(new UnexpectedError(`fail to read image file.`));
                  return;
                }
                resolve({
                  name: f.name,
                  dataUrl: event.target.result,
                  width: readImage.width,
                  height: readImage.height,
                });
              };
            }
          );
          reader.readAsDataURL(f);
        })
    );
    return await Promise.all(convertingImage);
  }

  public async resizeImage(readImage: ReadImage): Promise<ResizedImage> {
    console.log('resizeImage');
    const canvas = document.createElement('canvas');
    canvas.width = readImage.width * 3;
    canvas.height = readImage.height * 3;
    const context = canvas.getContext('2d');
    if (context === null) {
      throw new InvalidOperationError('fait to get context');
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    return new Promise((resolve) => {
      const canvasImage = new Image();
      canvasImage.src = readImage.dataUrl;
      canvasImage.onload = () => {
        context.drawImage(
          canvasImage,
          0,
          0,
          readImage.width,
          readImage.height,
          0,
          0,
          readImage.width * 3,
          readImage.height * 3
        );
        const result = canvas.toDataURL();
        resolve({ name: readImage.name, dataUrl: result });
      };
    });
  }
}
