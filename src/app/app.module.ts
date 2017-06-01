import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials.component';
import { ClassStyleBinding } from './tutorials/class-style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    ClassStyleBinding
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
