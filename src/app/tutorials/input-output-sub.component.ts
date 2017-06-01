import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'input-output-sub',
    template: `<h2>Child Component</h2>
                <label>Enter Child Component Value </label>
                <input type="text" #childtext (keyup)="onChange(childtext.value)">
                <p>Value from Parent Component is </p>
                {{parentData}}`,
    inputs: [`parentData`],
    outputs: [`childEvent`]
})
export class InputOutputSubComponent {
   public parentData: string;
   childEvent = new EventEmitter<string>();
   onChange(value:string) {
       this.childEvent.emit(value);
   }
}