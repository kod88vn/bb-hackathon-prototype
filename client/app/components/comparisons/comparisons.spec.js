import ComparisonsModule from './comparisons'
import ComparisonsController from './comparisons.controller';
import ComparisonsComponent from './comparisons.component';
import ComparisonsTemplate from './comparisons.html';

describe('Comparisons', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ComparisonsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ComparisonsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ComparisonsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ComparisonsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ComparisonsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ComparisonsController);
      });
  });
});
