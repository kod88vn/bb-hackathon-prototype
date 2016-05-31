import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Comparisons from './comparisons/comparisons';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Comparisons.name
]);

export default componentModule;
