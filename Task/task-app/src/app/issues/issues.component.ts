import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit{
  @Input() data: any[] = [];
  ngOnInit(): void {
    console.log('issue: ',this.data)
  }
}
