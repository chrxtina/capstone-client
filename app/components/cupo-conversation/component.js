import Ember from 'ember';

export default Ember.Component.extend({
  message: {},
  actions: {
    submit () {
      this.set('message.conversation_id', Ember.$('#convo_id').val());
      this.sendAction('submit', this.get('message'));
      this.set('message.body', null);
    }
  },
});
