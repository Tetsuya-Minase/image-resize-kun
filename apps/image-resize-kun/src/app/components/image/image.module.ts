import { NgModule } from '@angular/core';

import { ImageComponent } from './image.component';
import { ImageService } from './image.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [ImageComponent],
  declarations: [ImageComponent],
  providers: [ImageService],
})
export class ImageModule {}
