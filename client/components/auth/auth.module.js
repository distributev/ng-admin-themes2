'use strict';

angular.module('adminThemeApp.auth', ['adminThemeApp.constants', 'adminThemeApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
