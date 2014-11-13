angular.module('mainPage', [], function($locationProvider){
    $locationProvider.html5Mode(true);
})

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/index.html")   
    }])
    .controller('mainController', ['$scope', function(){


    }])

    .controller('navbarCtrl', ['$scope', '$location', function($scope, $location){

        $scope.menu = [
            {title:'home', link:'index.html'},
            {title:'About', link:'About.html'}
        ];

        $scope.returnLocation = function(){
            console.log($location.path());
            var path = $location.path().split("/");
            var thing = path[path.length - 1];
            console.log(thing);
            return $location.path();
        };

        $scope.isActive = function(route) {
            var path = $location.path().split("/");
            return route === path[path.length - 1];
        }
    }]);
