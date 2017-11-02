(function(){

var app = angular.module("appCode",["routeCode","fetchData","appDiretive"])
.controller("appController",function($scope,$location,$http,fetchDataService){
$scope.showVal = "Yo just did it";

$scope.submit= function(model){
if(model){
    if(model.user==="user" && model.pass==="pass"){
        alert("login successfull");
        $location.path('/');
    }}
}
 
fetchDataService.data.then(function(data){
    console.log(data.data);
})








});


})();