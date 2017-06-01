import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials.component';
import { ClassStyleBindingComponent } from './tutorials/class-style-binding.component';
import { EventBindingReferenceComponent } from "./tutorials/event-binding-reference.component";
import { TwoWayDataBinding } from "./tutorials/two-way-data-binding.component";

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    ClassStyleBindingComponent,
    EventBindingReferenceComponent,
    TwoWayDataBinding
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
