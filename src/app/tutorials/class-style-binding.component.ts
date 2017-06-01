import { Component } from "@angular/core";

@Component({
    selector: 'class-style-binding',
    template: `<div [class.my-class]="applyclass">Apply Class</div>
               <div [style.color]="'orange'">Apply style binding</div>
               <div [style.color]="applyBlue? 'blue' : 'green'">Apply style binding</div>`,
    styles: [`.my-class {color:red}
    `]
})
export class ClassStyleBinding {
    public applyclass = true;
    public applyBlue = false;
}