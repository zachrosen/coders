namespace app {
  interface ITodoResourceClass extends ng.resource.IResource<ITodoResourceClass>, ITodo{}
  interface ITodoResource extends ng.resource.IResourceClass<ITodoResourceClass>{
  }

  export class TodoService {

    private TodoResource: ITodoResource;

    public create(todo:ITodo) {
      return this.TodoResource.save(todo).$promise;
    }

    constructor(
      private $resource: ng.resource.IResourceService
    ) {
    this.TodoResource = <ITodoResource>$resource('/api/v1/todo',
    null, {'update': {'method': 'PUT'}});
    }
  }
  angular.module('app').service('TodoService', TodoService);
}
