import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(item, property) {
  return Ember.get(item, property);
})
