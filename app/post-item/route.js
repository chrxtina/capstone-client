import Ember from 'ember';

export default Ember.Route.extend({
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
      });
    },
  },
});
