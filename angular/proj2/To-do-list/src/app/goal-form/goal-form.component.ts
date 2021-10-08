import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  
  newToDo = new ToDo ("","", new Date ());
  

  constructor() { }

  ngOnInit(): void {
  }

}
