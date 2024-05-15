import { module, test } from 'qunit';
import { setupRenderingTest } from 'next-gen/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | electricity-chart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ElectricityChart />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ElectricityChart>
        template block text
      </ElectricityChart>
    `);

    assert.dom().hasText('template block text');
  });
});
