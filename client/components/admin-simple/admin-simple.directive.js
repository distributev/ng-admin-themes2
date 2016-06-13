'use strict';

angular.module('adminThemeApp')
.directive('adminSimple',function(){
	return {
		 templateUrl: 'components/admin-simple/admin-simple.html',
		 restrict: 'E',
		 controller:['$scope','$location','$timeout','Auth','menuService',function($scope, $location,$timeout,Auth,menuService){
		 	$scope.menu = menuService.getMenu('nav');
		 	$scope.isLoggedIn = false;
		 	$scope.Auth = Auth;

		    $scope.$watch('Auth.getCurrentUser().token',function(newVal){
			       	if(newVal){
		          		$scope.isLoggedIn = true;
       		
			       	}else{
			       		$scope.isLoggedIn = false;
			       	}
		    });

		    $scope.isActive = function(route) {
				return route === $location.path();
			};

		  }]
	};
});