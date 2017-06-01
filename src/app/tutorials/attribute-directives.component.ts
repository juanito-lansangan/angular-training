import { Component } from "@angular/core";

@Component({
    selector: 'attribute-directives',
    template: `<h1>{{title}}</h1>
                <p [ngClass]="{'bg-dark' : toggleclass, 'fc-light':toggleclass}">The quick brown fox jumps over the lazy dog</p>
                <button (click)="toggle()">Toggle</button>
                <p [ngStyle]="{'font-style': style, 'font-size': size}">ngStyle Text</p>`,
    styles: [
        `.bg-dark {background: black;}
         .fc-light {color:white}`
    ]
})
export class AttributeDirectivesComponent {
    title = "Attribute Directives";
    toggleclass = true;
    style = 'italic';
    size = '30px'
    toggle() {
        this.toggleclass = !this.toggleclass;
    }
}