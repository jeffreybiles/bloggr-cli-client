import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  downArrow: '&#9660',
  upArrow: '&#9650',

  actions: {
    sortBy: function(order){
      this.sendAction('action', this.get('sortProperty'), order)
    }
  }
});