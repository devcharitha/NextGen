import { module, test } from 'qunit';
import { setupTest } from 'next-gen/tests/helpers';

module('Unit | Route | carbon-calc', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:carbon-calc');
    assert.ok(route);
  });
});
