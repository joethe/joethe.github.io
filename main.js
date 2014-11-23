angular.module('mainApp', [])
    .controller('mainController', ['$scope', function(){

    }])

    .controller('navbarCtrl', ['$scope', function($scope){
        $scope.menu = [
            {title:'Home', link:'index.html'},
            {title:'Projects', link:'Projects.html'},
            {title:'About', link:'About.html'}
        ];

    }])

    .controller('projectsCtrl', ['$scope', function($scope){
        $scope.projectsIndex = [
            {title:'Playing with virtualization', link:'virtualizationPlayground.html'},
            {title:'MICS robotics', link:'mics2014.html'}
        ];

        $scope.activeProject = "virtualizationPlayground.html";

        $scope.setActiveProject = function(link){
            $scope.activeProject = link;
        };

        $scope.isActiveProject = function(link){
            return $scope.activeProject === link;
        }


    }]);
