import Ember from 'ember';

export default Ember.Controller.extend(Ember.SortableMixin, {
  queryParams: ['sortProperties', 'sortAscending', 'pageNumber', 'pageSize', 'columnsUsed'],
  availableColumns: [
    {'title': 'Title', 'property': 'title', 'display': 'plain'},
    {'title': 'Author', 'property': 'author', 'display': 'plain'},
    {'title': 'Updated', 'property': 'updatedAt', 'display': 'date'},
    {'title': 'Created', 'property': 'createdAt', 'display': 'date'}
  ],
  columnsUsed: [
    'title',
    'author',
    'updatedAt'
  ],
  columns: Ember.computed('availableColumns', 'columnsUsed.@each', function(){
    var controller = this;
    return this.get('columnsUsed').map(function(columnProperty){
      return controller.get('availableColumns').filter(function(column){
        return columnProperty == column.property
      })[0]
    })
  }),
  sortProperties: ['createdAt'],
  sortAscending: true,
  pageNumber: 0,
  pageSize: 10,
  possiblePageSizes: [10, 25, 50, 100],
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
    },
    changePageSize: function(newPageSize){
      var currentOffset = this.get('pageSize') * this.get('pageNumber');
      var newPageNumber = Math.floor(currentOffset / newPageSize);
      this.set('pageNumber', newPageNumber);
      this.set('pageSize', newPageSize)
    },
    moveLeft: function(property){
      var columns = this.get('columnsUsed')
      var index = columns.indexOf(property)
      columns.removeObject(property)
      if(index == 0){
        columns.insertAt(index, property)
      } else {
        columns.insertAt(index - 1, property)
      }
    },
    moveRight: function(property){
      var columns = this.get('columnsUsed')
      var index = columns.indexOf(property)
      columns.removeObject(property)
      if(columns.length > index){
        columns.insertAt(index + 1, property)
      } else {
        columns.insertAt(index, property)
      }
    }
  }
});