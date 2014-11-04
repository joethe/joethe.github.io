angular.module('mainPage', [])
    .controller('mainController', ['$scope', function(){


    }])

    .controller('navbarCtrl', ['$scope', function($scope, $location){
        $scope.menu = [
            {title:'home', link:'/index.html'},
            {title:'About', link:'/About.html'}
        ];

        $scope.returnLocation = function(){
            return $location.path();
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        }
    }]);
