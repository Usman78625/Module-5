 import { Component, Input, OnInit, EventEmitter , Output} from '@angular/core';

 @Component({
   selector: 'app-slect',
   templateUrl: './slect.component.html',
   styleUrls: ['./slect.component.css']
 })
 export class SelectComponent implements OnInit{ 
  @Input() data: any[] = [];
  @Output() option = new EventEmitter<string>();
  selected ='';
  
   ngOnInit(): void {
    console.log(this.data)

   }
   optionSelected() {
    console.log(this.selected);
    this.option.emit(this.selected);
   }
  
  }
  


