import { module, test } from 'qunit';

import { setupTest } from 'next-gen/tests/helpers';

module('Unit | Model | rewards', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('rewards', {});
    assert.ok(model);
  });
});
