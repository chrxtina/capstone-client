import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
   return RSVP.hash({
     item: this.get('store').findRecord('item', params.item_id),
     categories: this.get('store').findAll('category')
   });
  },
  actions: {
    save (item) {
      item.save()
      .then(() => this.transitionTo('my-items'))
      // .then(() => {
      //   this.get('flashMessages').success('Item successfully updated.');
      // })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
    back () {
      this.transitionTo('my-items');
    }
  }
});
