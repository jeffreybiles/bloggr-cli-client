import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['sortProperties', 'sortAscending'],
  sortProperties: ['createdAt'],
  sortAscending: true,
  actions: {
    sortBy: function(property, ascending){
      this.set('sortAscending', ascending)
      this.set('sortProperties', [property]);
    }
  }
});