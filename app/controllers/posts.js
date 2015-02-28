import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: true,
  downArrow: '&#9660',
  upArrow: '&#9650',
  actions: {
    sortBy: function(property, ascending){
      console.log('ascending', ascending)
      this.set('sortAscending', ascending)
      this.set('sortProperties', [property]);
    }
  }
});