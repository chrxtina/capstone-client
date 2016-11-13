import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  userId: Ember.computed.alias('auth.credentials.id'),
  conversation: {},
  actions: {
    submit () {
      this.set('conversation.name', Ember.$('#convo_name').val());
      this.set('conversation.user1', Ember.$('#owner_id').val());
      this.set('conversation.user2', Ember.$('#user_id').val());
      this.sendAction('submit', this.get('conversation'));
    },
  },
});
