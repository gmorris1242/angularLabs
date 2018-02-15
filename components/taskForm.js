(function() {
  var taskForm = {
    templateUrl: "partials/taskForm.html",
    controller: function FormController() {
      var $ctrl = this;
      $ctrl.input = "";
      $ctrl.add = function(input) {
        if ($ctrl.input !== "") {
          $ctrl.list.push({
            todo: input
          });
          $ctrl.input = "";
        }
      };

      $ctrl.list = [];

    }
  };

  angular.module("app")
    .component("taskForm", taskForm);
})();
