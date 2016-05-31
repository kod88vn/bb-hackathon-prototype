import angular from 'angular';
import uiRouter from 'angular-ui-router';
import comparisonsComponent from './comparisons.component';

let comparisonsModule = angular.module('comparisons', [
  uiRouter
])

.component('comparisons', comparisonsComponent);

export default comparisonsModule;
