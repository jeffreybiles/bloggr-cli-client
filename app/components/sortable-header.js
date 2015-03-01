import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  downArrow: Ember.computed('isAscending', 'isCurrentSort', function(){
    if(this.get('isCurrentSort') && this.get('isAscending')){
      return '<span class="gold">&#9660<span>';
    } else {
      return '&#9660';
    }
  }),
  upArrow: Ember.computed('isAscending', 'isCurrentSort', function(){
    if(this.get('isCurrentSort') && !this.get('isAscending')){
      return '<span class="gold">&#9650</span>';
    } else {
      return '&#9650';
    }
  }),
  sortProperties: Ember.computed('sortProperty', function(){
    return [this.get('sortProperty')]
  }),
  isCurrentSort: Ember.computed('parent.sortProperties.firstObject', 'sortProperty', function(){
    return this.get('parent.sortProperties.firstObject') === this.get('sortProperty');
  }),
  isAscending: Ember.computed.alias('parent.sortAscending')
});