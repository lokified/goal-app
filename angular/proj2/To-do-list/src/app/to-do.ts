export class ToDo {
    showSpecs! : boolean;
    constructor (
      public  toDoList : string,
      public  specifics : string,
      public  completeDate : Date
    ){
    this.showSpecs = false; 
    }

}
