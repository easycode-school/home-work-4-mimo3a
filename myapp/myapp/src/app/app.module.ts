import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { InputOutputComponentsComponent } from './components/input-output-components/input-output-components.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    InputOutputComponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
