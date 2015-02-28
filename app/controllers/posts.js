import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: true,
  actions: {
    sortBy: function(property, ascending){
      this.set('sortAscending', ascending)
      this.set('sortProperties', [property]);
    }
  }
});