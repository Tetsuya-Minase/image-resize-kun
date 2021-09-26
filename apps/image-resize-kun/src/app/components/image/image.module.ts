import { NgModule } from '@angular/core';

import { ImageComponent } from './image.component';
import { ImageService } from './image.service';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ResizeImageListComponent } from './components/resize-image-list/resize-image-list.component';
import { ResizeRangeSliderComponent } from './components/resize-range-slider/resize-range-slider.component';

@NgModule({
  imports: [CommonModule],
  exports: [ImageComponent],
  declarations: [
    ImageComponent,
    ImageUploadComponent,
    ResizeImageListComponent,
    ResizeRangeSliderComponent,
  ],
  providers: [ImageService],
})
export class ImageModule {}
