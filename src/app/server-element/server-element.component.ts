import { Component,
  OnInit, 
  Input ,ViewEncapsulation,OnChanges, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ServerElementComponent {
@Input('srvElement') element!: {type:string, name: string,content: string};
@Input() name: any;
constructor(){ 
  console.log('construcor called');
}
ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnchanges called');
  console.log(changes);
}
ngOnInit(){
  console.log('ngOnInit called');
}
ngDoCheck(){
  console.log('ngDoCheck called');
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called')
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called')
}
ngAfterViewInit(){
  console.log('ngAfterViewInt called')
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called')
}
}
