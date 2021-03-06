import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cupo-conversation', 'Integration | Component | cupo conversation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cupo-conversation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cupo-conversation}}
      template block text
    {{/cupo-conversation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
