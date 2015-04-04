import Ember from 'ember';

export default Ember.Controller.extend(Ember.SortableMixin, {
  queryParams: ['sortProperties', 'sortAscending'],
  sortProperties: ['createdAt'],
  sortAscending: true
});