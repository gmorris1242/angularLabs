(function() {
  function TodoService(){
    var savedList =[];
    return {
      getList: getList,
      setList: setList
    };

    function getList(){
      return savedlist;
    };

    function setList(input){
      savedList = input;
      console.log(savedList);
    };

  };

  angular.module("app")
    .factory("TodoService", TodoService)
}());
