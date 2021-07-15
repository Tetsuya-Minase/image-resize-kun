import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { ImageModule } from '../image/image.module';

@NgModule({
  imports: [ImageModule],
  exports: [MainComponent],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule {}
