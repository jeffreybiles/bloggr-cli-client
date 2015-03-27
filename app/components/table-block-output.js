import Ember from 'ember';

export default Ember.Component.extend({
  isPlain: Ember.computed.equal('column.display', 'plain'),
  isDate: Ember.computed.equal('column.display', 'date'),

  itemProperty: Ember.computed('column.property', 'item', function(){
    return this.get('item').get(this.get('column.property'))
  })
});