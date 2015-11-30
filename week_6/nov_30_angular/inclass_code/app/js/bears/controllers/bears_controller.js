module.exports = function(app) {
  app.controller('BearsController', ['$scope', function($scope) {
    $scope.greeting = 'There be bears in these hills';
  }]);
};
