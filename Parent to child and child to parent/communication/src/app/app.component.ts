import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'communication';
  // Parentmessege = 'messege from parent';
  // Parentmessage="Hello from parent"

  // onParentmsgChange(newMessage: string){
  //   console.log('parent msg changed', newMessage)
childMessage: any;

  onChildEvent(message: any){
      this.childMessage=message;
  }




  }

