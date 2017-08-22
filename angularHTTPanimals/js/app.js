var app = angular.module('webapp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: './views/main.html',
            controller: 'main'
        })
        .when('/users/', {
            templateUrl: './views/users.html',
            controller: 'first'
        })
        .when('/user/:id', {
            templateUrl: './views/user.html',
            controller: 'showUserController'
        })
        .when('/animals/', {
            templateUrl: './views/animals.html',
            controller: 'showAnimalsController'
        })

});



app.controller('first', function ($scope, $http) {
    $http({

        method: "GET",
        url: "http://localhost:3000/users"
    }).then(function (succes) {
        $scope.users = succes.data;
    }, function (error) {
        console.error(error);

    });



});



app.controller('showUserController', function ($scope, $routeParams, $http) {

    $http({
        method: "GET",
        url: "http://localhost:3000/users/" + $routeParams.id
    }).then(function (succes) {
        $scope.user = succes.data;
    }, function (error) {
        console.error(error);

    });


});

app.controller('showAnimalsController', function ($scope, $routeParams, $http) {

    $http({
        method: "GET",
        url: "http://localhost:3000/animals/"
    }).then(function (succes) {
        $scope.animals = succes.data;
    }, function (error) {
        console.error(error);

    });



});
