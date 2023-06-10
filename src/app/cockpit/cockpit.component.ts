import { Component,OnInit, EventEmitter , Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
   @Output() bluePrintCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName ='';
  //  newServerContent = '';
  @ViewChild('serverContentInput')serverContentInput!: ElementRef;

  constructor() {
   
  }
  ngOnInit(){

  }
   onAddServer( nameInput: HTMLInputElement ) {
      //  console.log(nameInput.value);
      // console.log(this.serverContentInput);
        this.serverCreated.emit({
         serverName: nameInput.value,
         serverContent: this.serverContentInput.nativeElement.value
       });
   }
     onAddBlueprint( nameInput: any ){
     this.bluePrintCreated.emit({
    //  serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
       });
     }

  }
