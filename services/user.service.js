(function(){
angular.module("fetchData",[])
.service('fetchDataService',function($http){

this.data =  $http.get('/data/user.json').then(function(data){
    // console.log(data);
    return data;
});
});
})();

