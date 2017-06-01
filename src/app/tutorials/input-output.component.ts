import { Component } from "@angular/core";

@Component({
    selector: 'input-output',
    template: `<h1>{{title}}</h1>
                <h2>Parent Component</h2>
                <label>Enter Parent Component Value </label>
                <input type="text" #ptext (keyup)="0">
                <p>Value from Child Component is </p>
                {{childData}}
                <input-output-sub (childEvent)="childData=$event" [parentData]="ptext.value"></input-output-sub>
                `
})
export class InputOutputComponent {
    title = "Input Output Component";
    public childData: string;
}