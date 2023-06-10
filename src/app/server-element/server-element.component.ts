import { Component,
  OnInit, 
  Input ,ViewEncapsulation,OnChanges, 
  SimpleChanges,
  ViewChild,
  ElementRef,
  ContentChild
  
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
@ViewChild('heading') header!: ElementRef;
@ContentChild('contentParagraph') paragraph!: ElementRef;
constructor(){ 
  console.log('construcor called');
}
ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnchanges called');
  console.log(changes);
}
ngOnInit(){
  console.log('ngOnInit called');
  console.log(this.header.nativeElement.textContent);
}
ngDoCheck(){
  console.log('ngDoCheck called');
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called')
  console.log('Text content of Paragraph: ' + this.paragraph.nativeElement.textContent )
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called')
}
ngAfterViewInit(){
  console.log('ngAfterViewInt called')
  console.log(this.header.nativeElement.textContent)
  console.log('Text content of Paragraph: ' + this.paragraph.nativeElement.textContent )
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called')
}
ngOnDestroy(){
  console.log('ngDestroy called')
}
}
