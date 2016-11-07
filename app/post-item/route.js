import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    postItem (newItem) {
      let item = this.get('store').createRecord('item', newItem);
      item.save();
    },
  },
});
