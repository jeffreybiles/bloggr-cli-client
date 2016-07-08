import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortProperties', 'sortAscending', 'pageNumber', 'pageSize', 'columnsUsed'],
  sortProperties: ['createdAt'],
  sortAscending: true,
  arrangedContent: Ember.computed('model', 'sortProperties', 'sortAscending', function(){
    return this.get('model').toArray().sort((a, b)=>{
      let sortProperty = this.get('sortProperties')[0];
      if(this.get('sortAscending')){
        return Ember.compare(a.get(sortProperty), b.get(sortProperty));
      } else {
        return Ember.compare(b.get(sortProperty), a.get(sortProperty));
      }
    })
  }),

  availableColumns: [
    {'title': 'Title', 'property': 'title', 'display': 'plain'},
    {'title': 'Author', 'property': 'author', 'display': 'plain'},
    {'title': 'Updated', 'property': 'updatedAt', 'display': 'date'},
    {'title': 'Created', 'property': 'createdAt', 'display': 'date'},
    {'title': 'Body', 'property': 'body', 'display': 'plain'}
  ],

  columnsUsed: [
    'title',
    'author'
  ],
  columns: Ember.computed('availableColumns', 'columnsUsed.@each', function(){
    var controller = this;
    return this.get('columnsUsed').map(function(columnProperty){
      return controller.get('availableColumns').filter(function(column){
        return columnProperty == column.property
      })[0]
    })
  }),

  pageNumber: 0,
  pageSize: 10,
  possiblePageSizes: [10, 25, 50, 100],

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
