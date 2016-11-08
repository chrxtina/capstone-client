import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
   return RSVP.hash({
     item: this.get('store').findRecord('item', params.item_id),
     categories: this.get('store').findAll('category')
   });
  },
  actions: {
    save (item) {
      item.save()
      .then(() => this.transitionTo('my-items'));
    },
    back () {
      this.transitionTo('my-items');
    }
  }
});
