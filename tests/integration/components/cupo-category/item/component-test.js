import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cupo-category/item', 'Integration | Component | cupo category/item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cupo-category/item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cupo-category/item}}
      template block text
    {{/cupo-category/item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
