import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  toDo : ToDo [] = [
    new ToDo( 'read on bootstrap in the evening', 'finish up on the card,form validation and drop downs', new Date(2021,9,10)),
    new ToDo('do some practices on angularjs','get used to creating components and directives with its custom makes', new Date(2021,9,11)),
    new ToDo('finish the photobin project','the images should be opening on top of the page and download button to be worked on', new Date(2021,9,13)),
    new ToDo('finish the pizza tops project','the table for summary is not yet responsive. work on it. And on checkout there should be a summary on the pizza selected',new Date(2021,9,15)),
    new ToDo('continue learning some jquery methods','more jquery methods to be learned and practiced',new Date(2021,9,18)),
    new ToDo('check on the children and parent methods in jquery','its one of the known usual methods to be farmiliar with', new Date(2021,9,25))
  ];

  toggleSpecs (index : any){
    this.toDo[index].showSpecs = !this.toDo[index].showSpecs;
  }

  completeList ( isComplete : any, index : number) {
    if(isComplete){
      this.toDo.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
