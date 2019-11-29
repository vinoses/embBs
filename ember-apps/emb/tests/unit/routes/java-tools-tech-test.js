import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | java-tools-tech', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:java-tools-tech');
    assert.ok(route);
  });
});
