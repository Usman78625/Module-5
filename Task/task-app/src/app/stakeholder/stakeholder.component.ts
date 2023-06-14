import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrls: ['./stakeholder.component.css']
})
export class StakeholderComponent implements OnInit {
  @Input() selectedStakeholder: string = '';
  @Input() data: any[] = [];
  @Output() stakeholderOption = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.data)
  }

  optionChange(option: any){
    this.stakeholderOption.emit(option);
  }
  
}
