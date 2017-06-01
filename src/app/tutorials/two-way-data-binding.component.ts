import { Component } from "@angular/core";

@Component({
    selector: 'two-way-binding',
    template: `<h1>{{title}}</h1>
               <input type="text" [(ngModel)]="_fname" />
               <input type="text" [(ngModel)]="_lname" />
               <h3>{{_fname}} {{_lname}}</h3>`
})
export class TwoWayDataBindingComponent  {
    title = "Two Way Binding";
    // fname;
    // lname;
}