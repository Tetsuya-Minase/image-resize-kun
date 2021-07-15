import { Injectable } from '@angular/core';
import { Nullable } from '../../types/expansion-type';

@Injectable()
export class ImageService {
  public readImage(files: Nullable<FileList>) {
    if (files === null) {
      return;
    }
  }
}
