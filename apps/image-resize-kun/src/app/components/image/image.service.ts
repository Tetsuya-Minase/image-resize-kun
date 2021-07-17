import { Injectable } from '@angular/core';
import { Nullable } from '../../types/expansion-type';
import { InvalidOperationError } from '../../model/error/invalid-operation-error';
import { UnexpectedError } from '../../model/error/unexpected-error';

@Injectable()
export class ImageService {
  public async readImagesAsDataURL(
    files: Nullable<FileList>
  ): Promise<Array<string | ArrayBuffer>> {
    if (files === null) {
      throw new InvalidOperationError('upload files are required.');
    }
    const convertingImage = Array.from(files).map(
      (f): Promise<string | ArrayBuffer> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener(
            'load',
            (event: ProgressEvent<FileReader>) => {
              if (event.target === null || event.target.result === null) {
                reject(new UnexpectedError(`fail to read image file.`));
                return;
              }
              resolve(event.target.result);
            }
          );
          reader.readAsDataURL(f);
        })
    );
    return await Promise.all(convertingImage);
  }

  public async resizeImages(image: string | ArrayBuffer): Promise<string> {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const context = canvas.getContext('2d');
    if (context === null) {
      throw new InvalidOperationError('fait to get context');
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    return new Promise((resolve) => {
      const canvasImage = new Image();
      // FIXME: type
      canvasImage.src = image as string;
      canvasImage.onload = () => {
        context.drawImage(canvasImage, 0, 0, 100, 100, 0, 0, 300, 300);
        const result = canvas.toDataURL();
        resolve(result);
      };
    });
  }
}
