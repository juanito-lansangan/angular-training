import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials.component';
import { ClassStyleBindingComponent } from './tutorials/class-style-binding.component';
import { EventBindingReferenceComponent } from "./tutorials/event-binding-reference.component";
import { TwoWayDataBindingComponent } from "./tutorials/two-way-data-binding.component";
import { StructuralDirectivesComponent } from "./tutorials/structural-directives.component";
import { AttributeDirectivesComponent } from "./tutorials/attribute-directives.component";
import { InputOutputComponent } from "./tutorials/input-output.component";
import { InputOutputSubComponent } from "./tutorials/input-output-sub.component";

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    ClassStyleBindingComponent,
    EventBindingReferenceComponent,
    TwoWayDataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    InputOutputComponent,
    InputOutputSubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
