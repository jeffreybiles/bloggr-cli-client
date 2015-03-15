import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',

  downArrow: '&#9660',
  downArrowHighlighted: Ember.computed('isAscending', 'isCurrentSort', function(){
    return this.get('isCurrentSort') && this.get('isAscending');
  }),
  upArrow: '&#9650',
  upArrowHighlighted: Ember.computed('isAscending', 'isCurrentSort', function(){
    return this.get('isCurrentSort') && !this.get('isAscending');
  }),

  isCurrentSort: Ember.computed('parent.sortProperties.firstObject', 'sortProperty', function(){
    return this.get('parent.sortProperties.firstObject') === this.get('sortProperty');
  }),
  isAscending: Ember.computed.alias('parent.sortAscending'),
  actions: {
    sortBy: function(sortProperty, order){
      this.sendAction('action', sortProperty, order);
    }
  }
});