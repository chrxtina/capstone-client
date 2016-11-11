import Ember from 'ember';

export default Ember.Component.extend({
  item: {},
  actions: {
    selectValue () {
      this.set('item.category_id', Ember.$('select').val());
    },
    submit () {
      this.sendAction('submit', this.get('item'));
      this.set('item.title', null);
      this.set('item.location', null);
      this.set('item.body', null);
      this.set('item.address', null);
    },
    reset () {
      this.set('item', {});
    },
  },
});
