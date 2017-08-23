var app = angular.module('webapp', ['ngRoute']);

var baseAJAXurl = 'http://localhost:3000/'


app.controller('mainController', function ($scope, $http) {
    //kod, który się wykona po uruchomieniu kontrollera
    $http({
        url: baseAJAXurl + 'subject',
        method: 'GET'
    }).then(function (success) {
        $scope.subjects = success.data;
    }, function (error) {
        console.error(error);
    });
    // kod, który się wykona po wywołaniu funkcji edit

    $scope.actuallyEditedId = null;


    $scope.edit = function (subject) {
        // alert(subject.id);
        if ($scope.actuallyEditedId != subject.id) {
            $scope.actuallyEditedId = subject.id;
        } else {
            // alert("Już edytujesz ten element!");
            $http({
                url: baseAJAXurl + 'subject/' + subject.id,
                method: 'PUT',
                data: {
                    name: subject
                }
            }).then(function (success) {
                console.log(success.data);
                $scope.actuallyEditedId = null;
            }, function (error) {
                console.error(success.error);
            });
        }
    }

    $scope.tryEdit = function (keyCode, subject) {
        if (keyCode === 13) {
            $scope.edit(subject);
        }
    }
});
