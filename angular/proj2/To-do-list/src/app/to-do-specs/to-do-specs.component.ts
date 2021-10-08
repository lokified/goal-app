import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { ToDo } from '../to-do';
@Component({
  selector: 'app-to-do-specs',
  templateUrl: './to-do-specs.component.html',
  styleUrls: ['./to-do-specs.component.css']
})
export class ToDoSpecsComponent implements OnInit {
  @Input() toDoSp! : ToDo;

  @Output() isComplete = new EventEmitter<boolean>();

  completeList ( complete : boolean){
      this.isComplete.emit (complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
