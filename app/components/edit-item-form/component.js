import Ember from 'ember';

export default Ember.Component.extend({
  item: {},
  actions: {
    selectValue () {
      this.set('item.category_id', Ember.$('select').val());
    },
    submit () {
      this.sendAction('submit', this.get('item'));
    },
    back () {
      this.sendAction('back');
    },
  },
});
