import { module, test } from 'qunit';

import { setupTest } from 'next-gen/tests/helpers';

module('Unit | Adapter | consumption', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:consumption');
    assert.ok(adapter);
  });
});
