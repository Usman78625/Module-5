import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrls: ['./stakeholder.component.css']
})
export class StakeholderComponent implements OnInit {
  @Input() data: any[] = [];
  ngOnInit(): void {
    console.log('stakholders: ',this.data)
  }
  
  
}
