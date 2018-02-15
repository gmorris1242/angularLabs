(function() {
  var taskForm = {
    templateUrl: "partials/taskForm.html",
    controller: function FormController(TodoService) {
      var $ctrl = this;
      $ctrl.list = [];
      $ctrl.input = "";
      $ctrl.add = function(input) {
        if ($ctrl.input !== "") {
          $ctrl.list.push({
            todo: input
          });
          $ctrl.input = "";
          TodoService.setList($ctrl.list);
        }
      };




    }
  };

  angular.module("app")
    .component("taskForm", taskForm);
})();
