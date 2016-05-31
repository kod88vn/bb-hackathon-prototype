import template from './comparisons.pug';
import controller from './comparisons.controller';
import './comparisons.styl';

let comparisonsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'compc'
};

export default comparisonsComponent;
