var app = angular.module('myPlaner', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/main.html'
        })
        .when('/add', {
            templateUrl: './views/add.html',
            controller: 'first'
        })
        .when('/show', {
            templateUrl: './views/show.html',
            controller: 'second'
        })
        .when('/delete/:id', {
            template: '',
            controller: 'deleteTaskController'
        })

});



app.service('plan', function () {
    this.counter = 1;
    this.tasks = [];
    this.add = function (plan) {
        plan.id = this.counter++;
        this.tasks.push(plan);
    }
    this.get = function () {
        return this.tasks;
    }



    this.deleteById = function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                break;
            }
        }
        this.tasks.splice(i, 1);
    }

});

app.controller('first', function ($scope, plan) {
    $scope.add = function () {
        plan.add({
            title: $scope.title,
            desc: $scope.desc,
        });
    }

});





app.controller('second', function ($scope, plan) {
    $scope.tasks = plan.get();
    $scope.done = function (id) {
        plan.deleteById(id);

    };


});




app.controller('deleteTaskController', function ($scope, $routeParams, plan, $location) {
    plan.deleteById($routeParams.id);
    $location.path('/show');
});
