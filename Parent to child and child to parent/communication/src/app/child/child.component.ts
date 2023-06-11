import { Component, Input, SimpleChange, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
// @Input() messege!: string;
//  @Input() message!: string;

//  ngOnChanges(changes: any){
//   if(changes.message) {
//        console.log('child messege changed:', changes.message.currentValue )
//   }
//  }
@Output() childEvent= new EventEmitter<string>()

SendMessage(){
  const message ='Hello from child componet';
  this.childEvent.emit(message);
}




}
