/**
 * Application module configuration.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
//
import ComponentsModule from './components';

const applicationModule = angular.module('application.module', [
  uiRouter,
  ComponentsModule.name,
]);

const Config = ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('!');
};

applicationModule.config(['$urlRouterProvider', '$locationProvider', Config]);

export default applicationModule;
