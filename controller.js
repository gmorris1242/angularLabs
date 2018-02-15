(function() {
function FormController(){
  var vm = this;

  vm.add = function (input){
    console.log(input);
    vm.list.push({todo: input});
    console.log(vm.list);
    vm.input = "";
  };
  // vm.removeMe = function($index){
  //   vm.list.splice($index,1);
  //   console.log("remove");
  //   console.log(vm.list);
  // };

  vm.list = [{todo: "dog"},{todo: "cat"},{todo: "rat"}];
  console.log(vm.list);
};
  angular.module("app").controller("FormController", FormController);
}());
