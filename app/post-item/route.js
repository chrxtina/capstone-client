import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').findAll('category');
  },
  actions: {
    postItem (newItem) {
      // let item = this.get('store').createRecord('item', newItem);
      // console.log(newItem);
      // item.save();

      let category = this.get('store').peekRecord('category', newItem.category_id);
      let item = this.get('store').createRecord('item', newItem);
      category.get('items').pushObject(item);
      item.save().then(function () {
        category.save();
      })
      .then(() => this.transitionTo('/'))
      .then(() => {
        this.get('flashMessages').success('Item successfully created.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
