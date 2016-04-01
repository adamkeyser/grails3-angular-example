
		angular.module('app').controller('headerController', function($scope, $location, $route) {
  		$scope.message = 'Everyone come and see how good I look!';
  		$scope.isActive = function(viewLocation) {
  		return viewLocation == $location.path();
  		};

  	});


	angular.module('app').controller('mainController', function($scope) {
		$scope.message = 'Everyone come and see how good I look!';
		$scope.toggle = false;

	});

	angular.module('app').controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	angular.module('app').controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});