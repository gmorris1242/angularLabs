(function() {
function FormController(){
  var vm = this;
  vm.input = "";

  vm.add = function (input){
  if(vm.input !== ""){
    vm.list.push({todo: input});
    vm.input = "";
  }
  };

  vm.list = [];

};
  angular.module("app").controller("FormController", FormController);
}());
