import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { ImageModule } from './components/image/image.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, MainModule, ImageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
