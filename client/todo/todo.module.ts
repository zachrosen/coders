namespace app{
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider
    .state('todo', {
      url: '/',
      templateUrl: '/client/todo/todo.html',
      controller: 'TodoController as vm'
    });
  });
}
