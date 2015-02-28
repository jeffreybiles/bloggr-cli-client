import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  videoUrl: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),

  deckedOutVideoUrl: function(){
    if(this.get('videoUrl')){
      return this.get('videoUrl') + '?modestbranding=1&rel=0';
    }
  }.property('videoUrl')
});