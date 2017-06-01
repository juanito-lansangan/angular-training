import { Component } from "@angular/core";

@Component({
    selector: 'my-tutorials',
    template: `<h2>{{ title }}</h2>
               <img [src]="imageUrl" />`
})
export class TutorialsComponent {
    public title = "Awesome Angular Tutorial";
    public imageUrl = "http://lorempixel.com/400/200";
}