import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  item: {},
  actions: {
    selectValue () {
      this.set('item.category_id', Ember.$('select').val());
    },
    submit () {
      this.sendAction('submit', this.get('item'));
    },
    reset () {
      this.set('item', {});
    },
  },
});
