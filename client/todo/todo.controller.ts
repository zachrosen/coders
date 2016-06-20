namespace app {

  export class TodoController{
    public todo: ITodo;

    public createTodo(){
      this.TodoService.create(this.todo);
    }

    constructor(
      private TodoService: app.TodoService
    ){

    }
  }
  angular.module('app').controller('TodoController', TodoController);
}
