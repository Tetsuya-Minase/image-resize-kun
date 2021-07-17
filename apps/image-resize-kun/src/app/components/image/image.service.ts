import { Injectable } from '@angular/core';
import { Nullable } from '../../types/expansion-type';
import { InvalidOperationError } from '../../model/error/invalid-operation-error';
import { UnexpectedError } from '../../model/error/unexpected-error';

@Injectable()
export class ImageService {
  public async readImageAsUint8Array(
    files: Nullable<FileList>
  ): Promise<Uint8Array[]> {
    if (files === null) {
      throw new InvalidOperationError('upload files are required.');
    }
    const convertingImage = Array.from(files).map(
      (f): Promise<Uint8Array> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener(
            'load',
            (event: ProgressEvent<FileReader>) => {
              if (event.target === null || event.target.result === null) {
                reject(new UnexpectedError(`fail to read image file.`));
                return;
              }
              try {
                const uint8Array = new Uint8Array(
                  event.target.result as ArrayBufferLike
                );
                resolve(uint8Array);
              } catch {
                reject(new UnexpectedError('fail to convert image file.'));
              }
            }
          );
          reader.readAsArrayBuffer(f);
        })
    );
    return await Promise.all(convertingImage);
  }
}
