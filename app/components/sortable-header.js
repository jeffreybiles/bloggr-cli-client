import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  downArrow: '&#9660',
  upArrow: '&#9650',
  classNames: 'text-center',

  isSelectedSort: Ember.computed('selectedSorts', 'sortProperty', function(){
    return this.get('selectedSorts')[0] === this.get('sortProperty');
  }),
  sortProperties: Ember.computed('sortProperty', function(){
    return [this.get('sortProperty')]
  }),
  actions: {
    moveLeft: function(){
      this.sendAction('moveLeft', this.get('sortProperty'))
    },
    moveRight: function(){
      this.sendAction('moveRight', this.get('sortProperty'))
    }
  }
});