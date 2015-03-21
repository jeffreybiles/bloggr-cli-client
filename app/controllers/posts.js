import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['sortProperties', 'sortAscending'],
  sortProperties: ['createdAt'],
  sortAscending: true
});