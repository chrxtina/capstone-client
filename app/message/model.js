import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  conversation: DS.belongsTo('conversation'),
  user: DS.belongsTo('user'),
  editable: DS.attr('boolean')
});
