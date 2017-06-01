import { Component } from "@angular/core"
@Component({
    selector: 'structural-directives',
    template: `<h1>{{title}}</h1>
                <div *ngIf="showElement">Show Element [ <i>ngIf Directive</i> ]</div>
                <div [ngSwitch]="color">
                    <p *ngSwitchCase="'red'">Red [ <i>ngSwitch Directive</i> ]</p>
                    <p *ngSwitchCase="'blue'">Blue [ <i>ngSwitch Directive</i> ]</p>
                    <p *ngSwitchCase="'green'">Green [ <i>ngSwitch Directive</i> ]</p>
                </div>
                <h3>ngFor Directive</h3>
                <ul>
                    <li *ngFor="let color of colors">{{color}}</li>
                </ul>`
})

export class StructuralDirectivesComponent {
    title = "Structural Directives";
    showElement = true;
    color = 'blue';
    colors = ['red','blue','green'];
}