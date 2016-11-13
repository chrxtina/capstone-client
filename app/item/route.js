import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
     return this.get('store').findRecord('item', params.item_id);
  },
  actions: {
    newConversation (newConvo) {
      let convo = this.get('store').createRecord('conversation', newConvo);
      convo.save()
      .then((id=convo.get('id')) => this.transitionTo('conversation', id))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
