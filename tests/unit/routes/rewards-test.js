import { module, test } from 'qunit';
import { setupTest } from 'next-gen/tests/helpers';

module('Unit | Route | rewards', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:rewards');
    assert.ok(route);
  });
});
