import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
// @Input() messege!: string;
 @Input() message!: string;

 ngOnChanges(changes: any){
  if(changes.message) {
       console.log('child messege changed:', changes.message.currentValue )
  }
 }
}
