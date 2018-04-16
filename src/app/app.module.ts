import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'alimentacion-app'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
