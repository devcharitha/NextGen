import { module, test } from 'qunit';

import { setupTest } from 'next-gen/tests/helpers';

module('Unit | Adapter | customers', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:customers');
    assert.ok(adapter);
  });
});
