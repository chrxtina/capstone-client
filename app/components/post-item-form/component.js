import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  item: {},
  actions: {
    selectValue () {
      this.set('item.category', Ember.$('select').val());
      console.log("this is item.category:", this.get('item.category'));
    },
    submit () {
      this.sendAction('submit', this.get('item'));
    },
    reset () {
      this.set('item', {});
    },
  },
});
