import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials.component';
import { ClassStyleBindingComponent } from './tutorials/class-style-binding.component';
import { EventBindingReferenceComponent } from "./tutorials/event-binding-reference.component";

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    ClassStyleBindingComponent,
    EventBindingReferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
