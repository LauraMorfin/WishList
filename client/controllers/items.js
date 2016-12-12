var myApp = angular.module('myApp');

myApp.controller('ItemsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ItemsController loaded...');

  $scope.newItem = function(){
    $scope.item = {};
  };

	$scope.getItems = function(){
		$http.get('/api/items').then(function(response){
			$scope.items = response.data;
		});
	}
  $scope.getItemById = function(){
    var id = $routeParams.id;
    console.log('Product id is ' + id);
		$http.get('/api/items/'+id).then(function(response){
			$scope.item = response.data;
      console.log($scope.item);
		});
	}
  $scope.addItem = function(){

		console.log($scope.item);
		$http.post('/api/items/', $scope.item).then(function(response){
      //$scope.item = response.data;
    	window.location.href='#!/items';
		});
	}
  $scope.updateItem = function(){
		var id = $routeParams.id;
		$http.put('/api/items/'+id, $scope.item).then(function(response){
			window.location.href='#!/items';
		});
	}

	$scope.removeItem = function(id){
		$http.delete('/api/items/'+id).then(function(response){
			window.location.href='#!/items';
		});
	}

}]);
