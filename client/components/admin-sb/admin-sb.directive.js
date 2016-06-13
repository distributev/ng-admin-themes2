'use strict';

angular.module('adminThemeApp')
.directive('adminSb',function(){
	return {
		 templateUrl: 'components/admin-sb/admin-sb.html',
		 restrict: 'E',
		 controller:['$scope','$location','$timeout','Auth','menuService',function($scope, $location,$timeout,Auth,menuService){
		 	$scope.menu = menuService.getMenu('nav');
		 	$scope.isLoggedIn = false;
		 	$scope.Auth = Auth;

		    $scope.$watch('Auth.getCurrentUser().token',function(newVal){
			       	if(newVal){
		          		$scope.isLoggedIn = true;
		          		$scope.userName = Auth.getCurrentUser().name;
			       	}else{
			       		$scope.userName = null;
			       		$scope.isLoggedIn = false;
			       	}
		    });

		    $scope.isActive = function(route) {
				return route === $location.path();
			};

		  }]
	};
});