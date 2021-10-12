import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { ImageModule } from './components/image/image.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ImageEffects } from './reducers/image.effects';
import { ImageReducer } from './reducers/image.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    MainModule,
    ImageModule,
    StoreModule.forRoot({ image: ImageReducer }),
    EffectsModule.forRoot([ImageEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
