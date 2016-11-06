import DS from 'ember-data';

export default DS.Model.extend({
    item: DS.hasMany('item'),
});
