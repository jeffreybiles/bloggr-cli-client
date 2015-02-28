import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: true,
  actions: {
    sortBy: function(property){
      if(property = this.get('sortProperties')[0]){
        this.toggleProperty('sortAscending')
      } else {
        this.set('sortAscending', true)
      }
      this.set('sortProperties', [property]);
    }
  }
});