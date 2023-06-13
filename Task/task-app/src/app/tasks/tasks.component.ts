import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() data: any[] = [];
  ngOnInit(): void {
    console.log('tasks: ',this.data)
  }
}

