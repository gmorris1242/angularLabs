(function() {
    var taskList = {
      templateUrl: "partials/taskList.html",
      bindings: {
        list: "<"

      },
      controller: function(){
        var $ctrl = this;
        $ctrl.removeMe = function($index){
          $ctrl.list.splice($index,1);
          console.log("remove");
          console.log($ctrl.list);
        };
      }
    };

    angular.module("app").component("taskList", taskList);
})();
