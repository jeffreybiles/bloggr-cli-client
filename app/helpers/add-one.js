import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(number) {
  return number + 1;
});