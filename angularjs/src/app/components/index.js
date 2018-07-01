/**
 * Components module configuration.
 */

import angular from 'angular';
//
import AppComponentModule from './app';

const componentsModule = angular
  .module('components.module', [
    AppComponentModule.name,
  ]);

export default componentsModule;
