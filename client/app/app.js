'use strict';

angular.module('adminThemeApp', ['adminThemeApp.auth', 'adminThemeApp.admin',
    'adminThemeApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match','Menus','mailMerge'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
.run(['menuService','Auth','$timeout','$rootScope',
    function(menuService) {
      menuService.addMenu('nav', {
        roles: ['user']
      });

      menuService.addMenuItem('nav', {
        title: 'Customers',
        state: 'customers',
        type: 'dropdown',
        roles: ['user']
      });

      menuService.addMenuItem('nav', {
        title: 'Transactions',
        state: 'transactions',
        type: 'dropdown',
        roles: ['user']
      });

      menuService.addMenuItem('nav', {
        title: 'Mail Merge',
        state: 'mailMerge',
        type: 'dropdown',
        roles: ['user']
      });
  
  }]);