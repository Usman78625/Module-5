import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit{
  @Input() data: string[] = [];
  @Input() selectedissue: any = '';
  @Output() IssueOption = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('issue: ',this.data)
  }
  optionChange(option: any){
    this.IssueOption.emit(option);
  }
}
