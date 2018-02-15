(function() {
function FormController(){
  var vm = this;

  vm.add = function (input){
    console.log(input);
    vm.list.push({todo: input});
    console.log(vm.list);
    vm.input = "";
  };

  vm.list = [];
  console.log(vm.list);
};
  angular.module("app").controller("FormController", FormController);
}());
