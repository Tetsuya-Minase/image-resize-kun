import { NgModule } from '@angular/core';

import { ImageComponent } from './image.component';
import { ImageService } from './image.service';

@NgModule({
  imports: [],
  exports: [ImageComponent],
  declarations: [ImageComponent],
  providers: [ImageService],
})
export class ImageModule {}
