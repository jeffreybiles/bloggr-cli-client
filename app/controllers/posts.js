import Ember from 'ember';

export default Ember.Controller.extend(Ember.SortableMixin, {
  queryParams: ['sortProperties', 'sortAscending', 'pageNumber'],
  sortProperties: ['createdAt'],
  sortAscending: true,

  pageNumber: 0,
  pageSize: 10,

  pages: Ember.computed('arrangedContent', 'pageSize', 'sortAscending', function(){
    var pages = [];
    var arrangedContent = this.get('arrangedContent').copy();
    while (arrangedContent.length > 0) {
      pages.push(arrangedContent.splice(0, this.get('pageSize')));
    }
    return pages;
  }),
  paginatedContent: Ember.computed('pages', 'pageNumber', function(){
    return this.get('pages')[this.get('pageNumber')]
  }),
});