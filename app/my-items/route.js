import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('category');
  },
  actions: {
    edit (item) {
      this.transitionTo('item/edit', item);
    },
    delete (item) {
      return this.get('store').findRecord('item', item, {backgroundReload: false })
      .then(function(item) {
        item.destroyRecord();
      })
      // .then(() => {
      //   this.get('flashMessages').success('Item deleted.');
      // })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }
  }
});
