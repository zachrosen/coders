namespace app {

  export class TodoController{
    public todo: ITodo;
    public todoArr: ITodo[];

    public createTodo(){
      this.TodoService.create(this.todo);
      console.log(this.todo);
      this.TodoService.create(this.todo).then(() => {
        this.$state.go('todo');
      });
    }

    constructor(
      private TodoService: app.TodoService,
      private $state: ng.ui.IStateService
    ){
      this.todoArr = TodoService.getAll();
    }
  }
  angular.module('app').controller('TodoController', TodoController);
}
