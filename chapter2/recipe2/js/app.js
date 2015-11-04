function MyCtrl($scope) {
  $scope.value = 1;
  $scope.incrementor = 2;

  $scope.incrementValue = function() {
    $scope.value += parseInt($scope.incrementor);
  };
  $scope.decrementValue = function() {
    $scope.value -= parseInt($scope.incrementor);
  };
}