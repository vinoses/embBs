import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | java-e-e', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:java-e-e');
    assert.ok(route);
  });
});
