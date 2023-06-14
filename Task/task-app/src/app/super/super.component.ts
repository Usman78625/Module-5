import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  selectedOption!: string;
  data = {'stakeholder': ['Nouman', 'Mohsin','Usman'],
          'tasks':['task1','task2', 'task3'],
           'issue': ['issue1','issue2','issue3']} 

  option: string = '';
  

  ngOnInit(): void {

    console.log(this.data.stakeholder)
  }   

  onOptionSelect(option: string) {
    this.selectedOption = option;
  }

  optionChange(option: any) {
    console.log(option)
    this.option = option;
  }
}
