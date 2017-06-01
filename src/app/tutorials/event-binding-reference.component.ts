import { Component } from "@angular/core";

@Component({
    selector: 'event-binding-reference',
    template: `<h1>{{title}}</h1>
               <button (click)="onClick(input)">Click Me</button>
               <button (mouseover)="mouseOver($event)">Trace Event</button>
               <input type="text" #input>`
})
export class EventBindingReferenceComponent {
    title = "Event binding";
    onClick(input) {
        console.log(input.value);
    }
    mouseOver(event){
        console.log(event);
    }
}