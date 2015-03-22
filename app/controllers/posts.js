import Ember from 'ember';

export default Ember.Controller.extend(Ember.SortableMixin, {
  queryParams: ['sortProperties', 'sortAscending', 'pageNumber', 'pageSize'],
  sortProperties: ['createdAt'],
  sortAscending: true,
  pageNumber: 0,
  pageSize: 10,
  possiblePageSizes: [10, 25, 50, 100],
  paginatedContent: Ember.computed('pages', 'pageNumber', function(){
    return this.get('pages')[this.get('pageNumber')]
  }),
  pages: Ember.computed('searchResults', 'pageSize', 'sortAscending', function(){
    var pages = [];
    var arrangedContent = this.get('searchResults').copy();
    while (arrangedContent.length > 0) {
      pages.push(arrangedContent.splice(0, this.get('pageSize')));
    }
    return pages;
  }),
  searchQuery: null,
  triggeredSearchQuery: null,
  searchResults: Ember.computed('triggeredSearchQuery', 'arrangedContent', function(){
    var searchQuery = this.get('searchQuery')
    if(!searchQuery){
      return this.get('arrangedContent')
    } else {
      var regex = new RegExp(searchQuery)
      this.set('pageNumber', 0)
      return this.get('arrangedContent').filter(function(item, index, ennumerable){
        var searchedFields = ['title', 'author', 'createdAt', 'updatedAt']
        return searchedFields.any(function(searchedField, index, ennumerable){
          console.log(item, searchedField)
          return item.get(searchedField).toString().match(regex);
        })
      })
    }
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
    },
    changePageSize: function(newPageSize){
      var currentOffset = this.get('pageSize') * this.get('pageNumber');
      var newPageNumber = Math.floor(currentOffset / newPageSize);
      this.set('pageNumber', newPageNumber);
      this.set('pageSize', newPageSize)
    },
    triggerSearch: function(){
      this.set('triggeredSearchQuery', this.get('searchQuery'))
    }
  }
});