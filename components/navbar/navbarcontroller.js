/**
 * Created by joseph on 10/19/14.
 */
angular.module('navbar', [])
    .controller('navbarCtrl', ['$scope', function($scope, $location){
    $scope.menu = [
        {title:'home', link:'/index.html'},
        {title:'About', link:'/About.html'}
    ];



    $scope.isActive = function(route){
        return route === $location.path();
    }



    }]);