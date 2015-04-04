import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(integer) {
  return integer + 1;
});