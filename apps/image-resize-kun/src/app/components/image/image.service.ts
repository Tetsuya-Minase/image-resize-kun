import { Injectable } from '@angular/core';
import { Nullable } from '../../types/expansion-type';
import { InvalidOperationError } from '../../model/error/invalid-operation-error';
import { UnexpectedError } from '../../model/error/unexpected-error';

@Injectable()
export class ImageService {
  public async readImageAsUint8Array(
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
}
