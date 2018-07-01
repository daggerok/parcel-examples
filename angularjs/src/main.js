//tag::content[]
import 'angular/angular-csp.css';
import './styles.css';
//
import angular from 'angular';
import applicationModule from './app';

angular.bootstrap(document, [applicationModule.name], {
  strictDi: true, // data-ng-strict-di=""
  cloak: true,    // data-ng-cloak=""
});
//end::content[]
