import Ember from 'ember';

export default Ember.Component.extend({
  isPlain: Ember.computed.equal('column.display', 'plain'),
  isDate: Ember.computed.equal('column.display', 'date'),
  isPostLink: Ember.computed.equal('column.display', 'post-link'),

  itemProperty: Ember.computed('column.property', 'item', function(){
    return this.get('item').get(this.get('column.property'))
  })
});