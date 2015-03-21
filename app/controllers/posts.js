import Ember from 'ember';

export default Ember.Controller.extend(Ember.SortableMixin, {
  queryParams: ['sortProperties', 'sortAscending', 'pageNumber', 'pageSize'],
  sortProperties: ['createdAt'],
  sortAscending: true,
  pageNumber: 0,
  pageSize: 10,
  paginatedContent: Ember.computed('pages', 'pageNumber', function(){
    return this.get('pages')[this.get('pageNumber')]
  }),
  pages: Ember.computed('arrangedContent', 'pageSize', 'sortAscending', function(){
    var pages = [];
    var arrangedContent = this.get('arrangedContent').copy();
    while (arrangedContent.length > 0) {
      pages.push(arrangedContent.splice(0, this.get('pageSize')));
    }
    return pages;
  }),
  actions: {
    previousPage: function(){
      if(this.get('pageNumber') > 0){
       this.set('pageNumber', this.get('pageNumber') - 1);
      }
    },
    nextPage: function(){
      if(this.get('pageNumber') + 1 < this.get('pages.length')){
        this.set('pageNumber', this.get('pageNumber') + 1);
      }
    }
  }
});