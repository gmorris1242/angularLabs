(function() {
  var taskForm = {
    templateUrl: "partials/taskForm.html",
    controller: function FormController(TodoService) {
      var $ctrl = this;

      $ctrl.list = TodoService.getList();
      $ctrl.input = "";
      $ctrl.add = function(input) {
        if ($ctrl.input !== "") {
          TodoService.setList(input);
          $ctrl.input = "";
        }
      };
    }
  };

  angular.module("app")
    .component("taskForm", taskForm);
})();
