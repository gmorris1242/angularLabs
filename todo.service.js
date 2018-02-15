(function() {
  function TodoService(){
    var savedList =[];

    return {
      getList: getList,
      setList: setList
    };

    function setList(input){
        savedList.push({
        todo: input
      });
      console.log(savedList);
    };

    function getList(){
      return savedList;
    };
  };

  angular.module("app")
    .factory("TodoService", TodoService)
}());
