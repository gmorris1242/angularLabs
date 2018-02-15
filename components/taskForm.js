(function() {
    var taskForm = {
      templateUrl: "partials/taskForm.html",
      controller:"FormController"
    };

    angular.module("app")
        .component("taskForm", taskForm);
})();
