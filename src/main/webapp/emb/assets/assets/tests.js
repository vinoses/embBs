'use strict';

define("emb/tests/integration/components/head-img-comp-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | head-img-comp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <HeadImgComp />
      */
      {
        id: "/c3mWC3t",
        block: "{\"symbols\":[],\"statements\":[[5,\"head-img-comp\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <HeadImgComp>
              template block text
            </HeadImgComp>
          
      */
      {
        id: "27+GTEnI",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"head-img-comp\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb/tests/integration/components/java-tech-img-comp-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | java-tech-img-comp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <JavaTechImgComp />
      */
      {
        id: "KwpZrw8I",
        block: "{\"symbols\":[],\"statements\":[[5,\"java-tech-img-comp\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <JavaTechImgComp>
              template block text
            </JavaTechImgComp>
          
      */
      {
        id: "//O/XNDA",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"java-tech-img-comp\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb/tests/integration/components/logo-img-comp-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | logo-img-comp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <LogoImgComp />
      */
      {
        id: "hhjR4foD",
        block: "{\"symbols\":[],\"statements\":[[5,\"logo-img-comp\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <LogoImgComp>
              template block text
            </LogoImgComp>
          
      */
      {
        id: "U/bewnwB",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"logo-img-comp\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb/tests/integration/components/root-img-comp-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | root-img-comp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <RootImgComp />
      */
      {
        id: "wR6jEhsW",
        block: "{\"symbols\":[],\"statements\":[[5,\"root-img-comp\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <RootImgComp>
              template block text
            </RootImgComp>
          
      */
      {
        id: "lPrq/sFd",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"root-img-comp\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/head-img-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/head-img-comp.js should pass ESLint\n\n');
  });
  QUnit.test('components/java-tech-img-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/java-tech-img-comp.js should pass ESLint\n\n');
  });
  QUnit.test('components/logo-img-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/logo-img-comp.js should pass ESLint\n\n');
  });
  QUnit.test('components/root-img-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/root-img-comp.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/java-tools-tech.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/java-tools-tech.js should pass ESLint\n\n');
  });
  QUnit.test('routes/root.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/root.js should pass ESLint\n\n');
  });
});
define("emb/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('emb/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb/templates/components/head-img-comp.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb/templates/components/head-img-comp.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb/templates/components/java-tech-img-comp.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb/templates/components/java-tech-img-comp.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb/templates/components/logo-img-comp.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb/templates/components/logo-img-comp.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb/templates/components/root-img-comp.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb/templates/components/root-img-comp.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb/templates/java-tools-tech.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb/templates/java-tools-tech.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb/templates/root.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb/templates/root.hbs should pass TemplateLint.\n\n');
  });
});
define("emb/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/head-img-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/head-img-comp-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/java-tech-img-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/java-tech-img-comp-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/logo-img-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/logo-img-comp-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/root-img-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/root-img-comp-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/java-tools-tech-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/java-tools-tech-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/root-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/root-test.js should pass ESLint\n\n');
  });
});
define("emb/tests/test-helper", ["emb/app", "emb/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb/tests/unit/routes/java-tools-tech-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | java-tools-tech', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:java-tools-tech');
      assert.ok(route);
    });
  });
});
define("emb/tests/unit/routes/root-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | root', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:root');
      assert.ok(route);
    });
  });
});
define('emb/config/environment', [], function() {
  var prefix = 'emb';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emb/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
