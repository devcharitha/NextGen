import { module, test } from 'qunit';
import { setupTest } from 'next-gen/tests/helpers';

module('Unit | Route | test-chart', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:test-chart');
    assert.ok(route);
  });
});
