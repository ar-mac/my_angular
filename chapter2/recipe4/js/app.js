module = angular.module('nameApp', []);

module.controller('MyCtrl', function ($scope) {
    $scope.name = "";
    $scope.visibility = false;


    $scope.$watch("name", function () {
        if ($scope.name.length > 0) {
            $scope.greeting = "Greetings " + $scope.name;
        }
    });
})
;

module.directive('paster', function () {
        return {
            link: function (scope, element, attributes) {
                scope.$watch(attributes.show, function (value) {
                    if (Math.abs(newVal.length - oldVal.length) > 1) {
                        element.css('display', '');
                    }
                    else {
                        element.css('display', 'none');
                    }
                    }
                )
                ;
            }
        }
    }
)
;