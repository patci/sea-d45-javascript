module.exports = function(app) {
  app.controller('BearsController', ['$scope', '$http', function($scope, $http) {
    $scope.bears = [];

    $scope.getAll = function() {
      $http.get('/api/bears')
        .then(function(res) {
          $scope.bears = res.data;
        }, function(err) {
          console.log(err.data);
        });
    }
  }]);
};
