import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user1: DS.attr('number'),
  user2: DS.attr('number'),
  messages: DS.hasMany('message')
});
