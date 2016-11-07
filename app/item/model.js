import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  body: DS.attr('string'),
  address: DS.attr('string'),
  category: DS.attr('string')
});
