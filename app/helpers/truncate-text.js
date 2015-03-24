import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(text, length) {
  if(text.length > length){
    return text.slice(0, length) + '...'
  } else {
    return text;
  }
})