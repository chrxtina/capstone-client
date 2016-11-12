import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('conversation', params.conversation_id);
  },
  actions: {
    postMessage (newMessage) {
      let conversation = this.get('store').peekRecord('conversation', newMessage.conversation_id);
      let message = this.get('store').createRecord('message', newMessage);
      conversation.get('messages').pushObject(message);
      message.save().then(function () {
        conversation.save();
      });
    },
  },
});
