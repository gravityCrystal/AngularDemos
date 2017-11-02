(function(){
angular.module('appDiretive',[]).directive('showColor',function(){

return {
    template:"<h1>Directive</h1>",
    restrict :'AEC',
    transclude:false,
    templateNamespace:'html',
    scope:false,
    controller:function($scope,$element,$attrs,$transclude,otherInjectables){

    },
    controllerAs:'main',
    bintToController:false,
    compile:function(templateElements,templateAttributes,transclude){

    },
    link:function(scope, iElements, iAttrs, controller ){

    }

  }

});

})();