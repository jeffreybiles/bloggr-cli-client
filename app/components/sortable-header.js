import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  downArrow: '&#9660',
  upArrow: '&#9650',

  isSelectedSort: Ember.computed('selectedSorts', 'sortProperty', function(){
    return this.get('selectedSorts')[0] === this.get('sortProperty');
  }),
  upArrowHighlighted: Ember.computed('isSelectedSort', 'isAscending', function(){
    return this.get("isSelectedSort") && this.get('isAscending');
  }),
  downArrowHighlighted: Ember.computed('isSelectedSort', 'isAscending', function(){
    return this.get("isSelectedSort") && !this.get('isAscending');
  }),
  sortProperties: Ember.computed('sortProperty', function(){
    return [this.get('sortProperty')]
  })
});