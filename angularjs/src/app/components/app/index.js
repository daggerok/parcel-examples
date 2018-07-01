/**
 * App component module configuration.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
//
import Config from './config.js';
import Component from './component.js';

const appComponentModule = angular
  .module('app.component.module', [uiRouter])
  .component('app', Component)
  .config(['$stateProvider', Config]);

export default appComponentModule;
