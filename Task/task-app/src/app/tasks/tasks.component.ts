import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() selectedTask: any = '';
  @Output() taskOption = new EventEmitter<string>();
  ngOnInit(): void {
    console.log('tasks: ',this.data)
  }

  
  optionChange(option: any){
    this.taskOption.emit(option);
  }

}

