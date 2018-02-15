(function() {
    var taskList = {
      templateUrl: "partials/taskList.html",
      binding: {
        input: "@"

      },
      controller:"FormController"
    };

    angular.module("app").component("taskList", taskList);
})();
