import { Component,OnInit, EventEmitter , Output} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
   @Output() bluePrintCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName ='';
   newServerContent = '';
  constructor() {
   
  }
  ngOnInit(){

  }
   onAddServer( nameInput: any ) {
      //  console.log(nameInput.value);
       this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.newServerContent
       });
   }
   onAddBlueprint( nameInput: any ){
    this.bluePrintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.newServerContent
     });
   }

}
