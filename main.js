angular.module('mainPage', [])
    .controller('mainController', ['$scope', function(){

    }])

    .controller('navbarCtrl', ['$scope', function($scope){
        $scope.menu = [
            {title:'Home', link:'index.html'},
            {title:'Projects', link:'Projects.html'}
        ];
    }]);
